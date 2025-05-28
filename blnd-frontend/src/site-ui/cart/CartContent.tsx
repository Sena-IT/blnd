"use client";
import ProductItemButton from "@/components/product/ProductItemButton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/slice/cartSlice";
import React from "react";
import { MdDelete } from "react-icons/md";

const CartContent = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="relative size-full">
      {items.length > 0 && (
        <button
          className="fixed bottom-10 right-4 rounded-xl p-3 bg-red-700 cursor-pointer"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          <MdDelete className="text-white w-5 h-5" />
        </button>
      )}

      {items.length > 0 ? (
        <div className="flex flex-col space-y-4">
          {items.map((item, i) => (
            <div className="flex flex-row space-x-4" key={i}>
              <div className="w-2/5">
                <img
                  src={item.image}
                  className="object-cover rounded-2xl size-full"
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
  );
};

export default CartContent;
