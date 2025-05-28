'use client'
import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Badge } from '@/components/ui/badge';
import { MdOutlineShoppingBag } from "react-icons/md";


const CartNotifyBadge: React.FC = () => {
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <div className="relative inline-flex items-center">
      <MdOutlineShoppingBag className="h-8 w-8 text-brand-secondary cursor-pointer" />
      {totalItems > 0 && (
        <Badge
          variant="destructive" 
          className="absolute rounded-full -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs font-bold p-0 min-w-[20px]"
        >
          {totalItems > 99 ? '99+' : totalItems}
        </Badge>
      )}
    </div>
  );
};

export default CartNotifyBadge;