"use client";

import { useReadingProgress } from "@/lib/post-hooks";

export default function PostReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full origin-left bg-accent/80 transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
