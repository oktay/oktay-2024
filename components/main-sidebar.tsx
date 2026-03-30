import { ScrollArea, ScrollAreaProps } from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

import MainNav from "./main-nav";

export default function MainSidebar({ className, ...props }: ScrollAreaProps) {
  return (
    <ScrollArea
      className={cn(
        "hidden md:block w-[240px] lg:w-[320px] border-r border-border/70 bg-background/40 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div className="px-2">
        <MainNav />
      </div>
    </ScrollArea>
  );
}
