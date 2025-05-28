import { cn } from "@/lib/utils";

import MainMenu from "./main-menu";

export default function MainHeader({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <header
      className={cn("z-50 bg-background border-b sticky top-0", className)}
      {...props}
    >
      <div className="container h-12 flex items-center">
        <MainMenu />
      </div>
    </header>
  );
}
