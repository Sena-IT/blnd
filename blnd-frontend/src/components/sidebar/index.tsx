import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { HEADER_NAVBAR_MENU } from "../header/constants";
import HeaderMenu from "../header/children/HeaderMenu";

const SideBarTrigger = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="block lg:hidden cursor-pointer">
        <Menu className="w-6 h-6 text-brand-secondary" />
      </SheetTrigger>
      <SheetContent className="rounded-tl-2xl rounded-bl-2xl">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="space-y-6 flex flex-col p-6">
            <HeaderMenu/>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarTrigger;
