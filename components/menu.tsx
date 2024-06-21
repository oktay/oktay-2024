import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { TriangleIcon } from "lucide-react";

import Navigation from "./navigation";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

export default function Menu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <span className="sr-only">Open menu</span>
          <TriangleIcon size={18} />
        </Button>
      </DrawerTrigger>

      <DrawerHeader>
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <DialogDescription className="sr-only">Navigation</DialogDescription>
      </DrawerHeader>

      <DrawerContent>
        <DrawerFooter>
          <Navigation />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
