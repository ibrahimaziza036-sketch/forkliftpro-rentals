import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

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

    const { success, resetAt } = rateLimit(ip);
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

    // Sanitize all inputs — ready for database storage
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sanitizedData = {
      name: sanitize(body.name),
      phone: sanitize(body.phone),
      serviceType: sanitize(body.serviceType),
      email: body.email ? sanitize(body.email) : undefined,
      message: body.message ? sanitize(body.message) : undefined,
      source: body.source ? sanitize(String(body.source).slice(0, 50)) : undefined,
    };

    // In production: save _sanitizedData to database, send email/WhatsApp notification
    // No customer data logged for privacy compliance

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
