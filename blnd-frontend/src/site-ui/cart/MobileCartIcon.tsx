"use client";
import React from "react";
import CartNotifyBadge from "./CartNotifyBadge";
import { usePathname, useRouter } from "next/navigation";

const MobileCartIcon = () => {
  const router = useRouter();
  const pathname=usePathname()

  if(pathname==='/cart'){
    return null
  }

  return (
    <button
      className="fixed h-12 w-12 cursor-pointer flex flex-row items-center justify-center p-4 bottom-10 z-50 right-5 rounded-full bg-brand-primary lg:hidden"
      onClick={() => {
        router.push("/cart");
      }}
    >
      <CartNotifyBadge />
    </button>
  );
};

export default MobileCartIcon;
