import { ScrollArea } from "@radix-ui/react-scroll-area";

import MainNav from "./main-nav";

export default function MainSidebar() {
  return (
    <ScrollArea className="hidden md:block md:w-[240px] lg:w-[320px] md:border-r bg-muted/20">
      <div className="px-2">
        <MainNav />
      </div>
    </ScrollArea>
  );
}
