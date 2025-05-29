"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { useRouter } from "next/navigation";

const CartFooter = ({closeCart}:{closeCart:()=>void}) => {
  const { totalAmount, items } = useAppSelector((state) => state.cart);
  const router=useRouter()
   const routeToCheckout=()=>{
    closeCart()
    router.push('/checkout')

  }

  if (items.length === 0) {
    return null;
  }

 
  
else{
  return (
    <div className="flex flex-row items-center space-x-6 w-full">
      <div className="flex flex-col">
        <h2 className="text-xl; text-brand-secondary font-semibold">Total</h2>
        <h2 className="text-xl text-brand-secondary font-semibold">
          ₹{totalAmount}
        </h2>
      </div>
      <div className="flex-1">
        <Button 
        onClick={routeToCheckout}
        className="w-full h-12 text-lg hover:bg-brand-secondary text-white cursor-pointer  bg-brand-secondary font-normal">
          Checkout
        </Button>
      </div>
    </div>
  );
};
}

export default CartFooter;
