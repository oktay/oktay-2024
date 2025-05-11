import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { MenuIcon } from "lucide-react";

import MainNav from "./main-nav";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

export default function MainMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden -ml-4">
          <span className="sr-only">Open menu</span>
          <MenuIcon size={24} />
        </Button>
      </DrawerTrigger>

      <DrawerHeader>
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <DialogDescription className="sr-only">Navigation</DialogDescription>
      </DrawerHeader>

      <DrawerContent>
        <DrawerFooter>
          <MainNav />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
