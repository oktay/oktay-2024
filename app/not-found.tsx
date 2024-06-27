import { CircleOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100dvh-3rem)] md:h-screen bg-muted text-muted-foreground/30">
      <CircleOff className="w-16 h-16" />
      <h1 className="mt-4 text-2xl font-semibold text-center">Not Found</h1>
    </div>
  );
}
