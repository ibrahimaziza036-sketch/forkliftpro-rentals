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

    if (body.message && (typeof body.message !== "string" || body.message.length > 2000)) {
      return NextResponse.json(
        { error: "Message must be under 2000 characters" },
        { status: 400 }
      );
    }

    if (body.equipmentType && (typeof body.equipmentType !== "string" || body.equipmentType.length > 100)) {
      return NextResponse.json(
        { error: "Invalid equipment type" },
        { status: 400 }
      );
    }

    if (body.duration && (typeof body.duration !== "string" || body.duration.length > 50)) {
      return NextResponse.json(
        { error: "Invalid duration" },
        { status: 400 }
      );
    }

    // Sanitize all inputs — ready for database storage
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sanitizedData = {
      name: sanitize(body.name),
      phone: sanitize(body.phone),
      serviceType: sanitize(body.serviceType),
      message: body.message ? sanitize(body.message) : undefined,
      equipmentType: body.equipmentType ? sanitize(body.equipmentType) : undefined,
      duration: body.duration ? sanitize(body.duration) : undefined,
    };

    // In production: save _sanitizedData to database, auto-assign to sales rep
    // No customer data logged for privacy compliance

    return NextResponse.json(
      {
        success: true,
        message:
          "Quote request received! Our team will prepare your quote and contact you within 30 minutes.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please call us directly." },
      { status: 500 }
    );
  }
}
