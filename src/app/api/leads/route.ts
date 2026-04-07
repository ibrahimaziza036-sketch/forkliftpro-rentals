import { NextRequest, NextResponse } from "next/server";
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
  if (!TURNSTILE_SECRET) return true;
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
/*  Input sanitization                                                 */
/* ------------------------------------------------------------------ */
function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting — 5 requests per minute per IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const { success, resetAt } = await rateLimit(ip);
    if (!success) {
      const retryAfter = Math.ceil((resetAt - Date.now()) / 1000);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfter) },
        }
      );
    }

    const body = await request.json();

    // Required field validation
    if (!body.name || !body.phone || !body.serviceType) {
      return NextResponse.json(
        { error: "Name, phone, and service type are required" },
        { status: 400 }
      );
    }

    // Type and length validation
    if (typeof body.name !== "string" || body.name.trim().length < 2 || body.name.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters" },
        { status: 400 }
      );
    }

    if (typeof body.phone !== "string" || !PHONE_REGEX.test(body.phone)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number" },
        { status: 400 }
      );
    }

    if (typeof body.serviceType !== "string" || body.serviceType.length > 100) {
      return NextResponse.json(
        { error: "Invalid service type" },
        { status: 400 }
      );
    }

    if (body.email && (typeof body.email !== "string" || !EMAIL_REGEX.test(body.email))) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (body.message && (typeof body.message !== "string" || body.message.length > 2000)) {
      return NextResponse.json(
        { error: "Message must be under 2000 characters" },
        { status: 400 }
      );
    }

    // Verify Turnstile CAPTCHA
    if (TURNSTILE_SECRET && body.turnstileToken) {
      const isHuman = await verifyTurnstile(body.turnstileToken);
      if (!isHuman) {
        return NextResponse.json(
          { error: "CAPTCHA verification failed. Please try again." },
          { status: 403 }
        );
      }
    }

    // Sanitize all inputs
    const safeName = sanitize(body.name);
    const safePhone = sanitize(body.phone);
    const safeService = sanitize(body.serviceType);
    const safeEmail = body.email ? sanitize(body.email) : "";
    const safeMessage = body.message ? sanitize(body.message) : "";
    const safeSource = body.source ? sanitize(String(body.source).slice(0, 50)) : "Website";

    // Send email notification via Resend
    if (resend) {
      try {
        await resend.emails.send({
          from: "ForkliftPro Website <onboarding@resend.dev>",
          to: [CONTACT_EMAIL],
          ...(safeEmail ? { replyTo: safeEmail } : {}),
          subject: `New Lead: ${safeService} — ${safeName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: #1A1A2E; padding: 20px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #FF6B00; margin: 0; font-size: 24px;">New Lead Captured</h1>
                <p style="color: #ccc; margin: 5px 0 0;">Source: ${safeSource}</p>
              </div>
              <div style="background: #f9f9f9; padding: 20px; border: 1px solid #eee;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #555;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                    <td style="padding: 8px 0; color: #555;"><a href="tel:${safePhone}">${safePhone}</a></td>
                  </tr>
                  ${safeEmail ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td><td style="padding: 8px 0; color: #555;">${safeEmail}</td></tr>` : ""}
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
                    <td style="padding: 8px 0; color: #555;">${safeService}</td>
                  </tr>
                </table>
                ${safeMessage ? `
                <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
                <p style="font-weight: bold; color: #333; margin-bottom: 8px;">Message:</p>
                <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
                ` : ""}
              </div>
              <div style="background: #1A1A2E; padding: 12px 20px; border-radius: 0 0 8px 8px; text-align: center;">
                <p style="color: #888; font-size: 12px; margin: 0;">ForkliftPro Rentals — Jeddah, Saudi Arabia</p>
              </div>
            </div>
          `,
        });
      } catch {
        // Silently handle — don't expose error details
      }
    } else {
      if (process.env.NODE_ENV === "development") {
        console.warn("RESEND_API_KEY not set. Lead email was NOT sent.");
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll contact you within 30 minutes.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
