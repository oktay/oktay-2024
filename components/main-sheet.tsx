import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import MainNav from "./main-nav";
import { Button } from "./ui/button";

export default function MainSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="-ml-4 hidden md:inline-flex"
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Navigation</SheetDescription>
        </SheetHeader>

        <SheetFooter className="h-full">
          <MainNav />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
