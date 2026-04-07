/**
 * Rate limiter with Upstash Redis for production (serverless-safe)
 * and in-memory fallback for local development.
 *
 * Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in env
 * to enable distributed rate limiting on Vercel.
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/* ------------------------------------------------------------------ */
/*  Upstash Redis rate limiter (production — works on serverless)      */
/* ------------------------------------------------------------------ */
let upstashLimiter: Ratelimit | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  upstashLimiter = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    analytics: true,
    prefix: "forkliftpro:ratelimit",
  });
}

/* ------------------------------------------------------------------ */
/*  In-memory fallback (development only)                              */
/* ------------------------------------------------------------------ */
interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const memoryStore = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes
if (typeof globalThis !== "undefined") {
  const cleanup = () => {
    const now = Date.now();
    for (const [key, entry] of memoryStore) {
      if (now > entry.resetAt) memoryStore.delete(key);
    }
  };
  setInterval(cleanup, 5 * 60 * 1000);
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */
export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

interface RateLimitConfig {
  maxRequests?: number;
  windowSec?: number;
}

export async function rateLimit(
  key: string,
  config: RateLimitConfig = {}
): Promise<RateLimitResult> {
  const maxRequests = config.maxRequests ?? 5;
  const windowSec = config.windowSec ?? 60;

  /* --- Production: Upstash Redis --- */
  if (upstashLimiter) {
    const result = await upstashLimiter.limit(key);
    return {
      success: result.success,
      remaining: result.remaining,
      resetAt: result.reset,
    };
  }

  /* --- Development fallback: in-memory --- */
  const now = Date.now();
  const entry = memoryStore.get(key);

  if (!entry || now > entry.resetAt) {
    const resetAt = now + windowSec * 1000;
    memoryStore.set(key, { count: 1, resetAt });
    return { success: true, remaining: maxRequests - 1, resetAt };
  }

  if (entry.count >= maxRequests) {
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count++;
  return {
    success: true,
    remaining: maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}
