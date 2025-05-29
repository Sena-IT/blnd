'use client'
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartNotifyBadge from "./CartNotifyBadge";
import CartFooter from "./CartFooter";
import CartContent from "./CartContent";

const CartTrigger = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild className="lg:block hidden cursor-pointer">
        <div>
          <CartNotifyBadge />
        </div>
      </SheetTrigger>
      <SheetContent className="max-w-2xl rounded-tl-2xl rounded-bl-2xl overflow-y-auto flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-lg">Cart</SheetTitle>
        </SheetHeader>
        <div className="p-3 flex-1">
          <CartContent />
        </div>
        <SheetFooter className="">
          <CartFooter closeCart={() => setOpen(false)} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartTrigger;