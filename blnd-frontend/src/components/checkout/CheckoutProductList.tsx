'use client'
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import ProductItemButton from "../product/ProductItemButton";
import { base_api_url } from "@/api/constants";

const CheckoutProductList = () => {
  const { items,totalAmount } = useAppSelector((state) => state.cart);
  return (
    <div className="">
      <div className="space-y-6 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {items.map((item, i) => (
          <div className="flex flex-row space-x-4" key={i}>
            <div className="w-2/5">
              <img
                src={base_api_url+ item.image}
                className="object-cover rounded-2xl size-full"
              />
            </div>
            <div className="w-3/5">
              <div className="w-full flex flex-col">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-brand-secondary truncate">
                    {item.name}
                  </h2>

                  <h2 className="text-lg font-semibold text-brand-secondary">
                    ₹{item.price}
                  </h2>
                </div>
              </div>
              <div className="mt-6">
                <ProductItemButton id={Number(item.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-10 flex flex-row items-center justify-between bg-brand-secondary text-white p-4 rounded-2xl'>
       <h2 className="text-xl font-semibold">
        Total
       </h2>
       <h2 className="text-xl font-semibold">
         ₹{totalAmount}
       </h2>
      </div>
    </div>
  );
};

export default CheckoutProductList;
