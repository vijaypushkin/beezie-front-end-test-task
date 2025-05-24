"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h2 className="text-lg mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
      >
        Try again
      </button>
    </div>
  );
}
