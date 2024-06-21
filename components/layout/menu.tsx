import { TriangleIcon } from "lucide-react";

import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import Navigation from "./navigation";

export default function Menu() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="ghost" size="icon">
          <span className="sr-only">Open menu</span>
          <TriangleIcon size={18} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerFooter>
          <Navigation />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
