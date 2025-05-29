import React, { useState } from "react";
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
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild className="block lg:hidden cursor-pointer">
        <Menu className="w-6 h-6 text-brand-secondary" />
      </SheetTrigger>
      <SheetContent className="rounded-tl-2xl rounded-bl-2xl">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="space-y-6 flex flex-col p-6">
          <HeaderMenu closeSidebar={closeSidebar} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarTrigger;