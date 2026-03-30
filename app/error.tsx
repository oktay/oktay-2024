"use client";

import { CircleAlert } from "lucide-react";
import Link from "next/link";

import StateCard from "@/components/state-card";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <StateCard
      title="Something went wrong"
      description="An unexpected error occurred while loading this page."
      icon={<CircleAlert className="h-7 w-7 text-accent" />}
      actions={
        <div className="flex items-center justify-center gap-2">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>
      }
    />
  );
}
