"use client";
import { ProductType } from "@/site-ui/shop/type";
import React, { useState } from "react";
import ProductModal from "./ProductModal";
import ProductItemButton from "./ProductItemButton";
import { ProductItems } from "@/types/types";
import { base_api_url } from "@/api/constants";

const ProductItem = ({ product }: { product: ProductItems }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const openProductModal = (e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setOpenModal(true);
    setId(product.id);
  };

  const closeProductModal = () => {
    setId(product.id);
    setOpenModal(false);
  };
  return (
    <React.Fragment>
      <div
        onClick={openProductModal}
        className="rounded-2xl bg-white w-full h-[600px] flex flex-col overflow-hidden cursor-pointer"
      >
        <div className="p-4 flex flex-col h-full">
          <div className="h-72 relative group w-full flex items-center justify-center overflow-hidden rounded-lg mb-4">
            <img
              src={base_api_url+product.item_image[0].url}
              alt={product.name}
              className="absolute inset-0  object-contain w-full max-h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            <img
              src={base_api_url+ product.item_image[1]?.url || base_api_url+product.item_image[0].url}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-3xl font-medium text-brand-secondary line-clamp-2 h-[65px] flex items-start justify-center">
              {product.name}
            </h2>

            <div className="space-y-2  mt-8">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-medium text-[#587151]">Individual Sachet Price:</h2>
                <h2 className="text-2xl font-bold text-[#537D5D]">
                   ₹{product.item_price[0].sachet_price}
                </h2>
              </div>

              <div className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-medium text-[#587151]">
                  Weekly Bundle Price:
                </h2>
                <h2 className="text-2xl font-bold text-[#537D5D]">
                   ₹{product.item_price[0].weekly_price}
                </h2>
              </div>
            </div>

           <ProductItemButton id={product.id}/>
          </div>
        </div>
      </div>
      <ProductModal id={id} open={openModal} closeModal={closeProductModal} />
    </React.Fragment>
  );
};

export default ProductItem;
