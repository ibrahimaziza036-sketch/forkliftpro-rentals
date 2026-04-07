import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || "";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL_TO || "info@forkliftprorentals.com";

/* ------------------------------------------------------------------ */
/*  Turnstile verification                                             */
/* ------------------------------------------------------------------ */
async function verifyTurnstile(token: string): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true; // Skip if not configured
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET,
          response: token,
        }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ */
/*  Simple input sanitization                                          */
/* ------------------------------------------------------------------ */
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

/* ------------------------------------------------------------------ */
/*  POST handler                                                       */
/* ------------------------------------------------------------------ */
export async function POST(request: Request) {
  try {
    // --- Rate limiting (5 requests per minute per IP) ---
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    const limit = await rateLimit(ip, { maxRequests: 5, windowSec: 60 });

    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.ceil((limit.resetAt - Date.now()) / 1000)
            ),
          },
        }
      );
    }

    const body = await request.json();
    const { name, email, phone, company, service, message, turnstileToken } =
      body;

    // --- Validate required fields ---
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // --- Validate email format ---
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // --- Verify Turnstile CAPTCHA ---
    if (TURNSTILE_SECRET && turnstileToken) {
      const isHuman = await verifyTurnstile(turnstileToken);
      if (!isHuman) {
        return NextResponse.json(
          { error: "CAPTCHA verification failed. Please try again." },
          { status: 403 }
        );
      }
    }

    // --- Sanitize inputs ---
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeCompany = sanitize(company || "");
    const safeService = sanitize(service || "");
    const safeMessage = sanitize(message);

    // --- Send email via Resend ---
    if (resend) {
      try {
        await resend.emails.send({
          from: "ForkliftPro Website <onboarding@resend.dev>",
          to: [CONTACT_EMAIL],
          replyTo: safeEmail,
          subject: `New Inquiry: ${safeService || "General"} — ${safeName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: #1A1A2E; padding: 20px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #FF6B00; margin: 0; font-size: 24px;">New Contact Inquiry</h1>
                <p style="color: #ccc; margin: 5px 0 0;">via forkliftprorentals.com</p>
              </div>
              <div style="background: #f9f9f9; padding: 20px; border: 1px solid #eee;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #555;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                    <td style="padding: 8px 0; color: #555;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                    <td style="padding: 8px 0; color: #555;"><a href="tel:${safePhone}">${safePhone}</a></td>
                  </tr>
                  ${safeCompany ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Company:</td><td style="padding: 8px 0; color: #555;">${safeCompany}</td></tr>` : ""}
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
                    <td style="padding: 8px 0; color: #555;">${safeService || "Not specified"}</td>
                  </tr>
                </table>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
                <p style="font-weight: bold; color: #333; margin-bottom: 8px;">Message:</p>
                <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
              </div>
              <div style="background: #1A1A2E; padding: 12px 20px; border-radius: 0 0 8px 8px; text-align: center;">
                <p style="color: #888; font-size: 12px; margin: 0;">ForkliftPro Rentals — Jeddah, Saudi Arabia</p>
              </div>
            </div>
          `,
        });
      } catch {
        // Silently handle — don't expose error details in production
      }
    } else {
      if (process.env.NODE_ENV === "development") {
        console.warn("RESEND_API_KEY not set. Email was NOT sent.");
      }
    }

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
