"use client";

import Link from "next/link";

export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">Oops!</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again or contact us
          if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold px-8 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
