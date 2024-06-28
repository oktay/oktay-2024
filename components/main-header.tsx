import { cn } from "@/lib/utils";

import MainMenu from "./main-menu";

export default function MainHeader({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <header
      className={cn("z-10 bg-background border-b md:hidden", className)}
      {...props}
    >
      <div className="container h-12 flex items-center -ml-2">
        <MainMenu />
      </div>
    </header>
  );
}
