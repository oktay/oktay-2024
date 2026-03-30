import { CircleOff } from "lucide-react";
import Link from "next/link";

import StateCard from "@/components/state-card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <StateCard
      title="Not Found"
      description="The page you are looking for does not exist."
      icon={<CircleOff className="h-7 w-7 text-accent" />}
      actions={
        <Button variant="outline" asChild>
          <Link href="/">Go home</Link>
        </Button>
      }
    />
  );
}
