"use client";

import { CircleAlert } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100dvh-3rem)] md:h-screen bg-muted text-muted-foreground/30">
      <CircleAlert className="w-16 h-16" />
      <h1 className="mt-4 text-2xl font-semibold text-center">
        Something went wrong
      </h1>
    </div>
  );
}
