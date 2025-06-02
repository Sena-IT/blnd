"use client";
import { base_api_url } from "@/api/constants";
import ProductItemButton from "@/components/product/ProductItemButton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/slice/cartSlice";
import React from "react";
import { MdDelete } from "react-icons/md";
import CartFooter from "./CartFooter";

const CartContent = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] lg:h-full">
    
      <div className="flex-1 overflow-y-auto">
        {items.length > 0 && (
          <button
            className="fixed bottom-10 right-4 rounded-xl p-3 bg-red-700 z-50 cursor-pointer"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            <MdDelete className="text-white w-5 h-5" />
          </button>
        )}

        {items.length > 0 ? (
          <div className="flex flex-col space-y-4 h-full">
            {items.map((item, i) => (
              <div className="flex flex-row space-x-4" key={i}>
                <div className="w-2/5">
                  <img
                    src={base_api_url + item?.image}
                    className="object-cover rounded-2xl size-full"
                    alt={item.name}
                  />
                </div>
                <div className="w-3/5">
                  <div className="w-full flex flex-col">
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-brand-secondary">
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
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <p className="text-xl font-medium text-brand-secondary text-center">
              Please add items to the cart.
            </p>
          </div>
        )}
      </div>
      
    
      <div className="lg:hidden flex-shrink-0">
        <CartFooter />
      </div>
    </div>
  );
};

export default CartContent;