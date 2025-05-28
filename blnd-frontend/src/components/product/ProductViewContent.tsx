import React, { useState } from "react";
import { Button } from "../ui/button";
import ProductItemButton from "./ProductItemButton";
import { useProducts } from "@/context/ProductsProvider";
import { base_api_url } from "@/api/constants";

const ProductViewContent = ({ id }: { id: number | string  }) => {

  const {products}=useProducts()
  const data = products.find((prod, i) => prod.id === id);

  const [seletcedImage, setSelectedImage] = useState(base_api_url+ (data?.item_image[0].url || ''));
  return (
    <div className="flex flex-col lg:flex-row items-start lg:space-x-6 space-y-6">
      <div className="lg:w-1/2 w-full">
        <div className="flex flex-col space-y-3">
          <div className="h-72">
            <img
              src={seletcedImage}
              className="max-h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-row items-center space-x-4">
            {data?.item_image.map((img, i) => (
              <div
                key={i}
                className={`w-[100px] overflow-hidden h-[100px] rounded-2xl ${
                  img.url === seletcedImage && "ring-4 ring-brand-secondary"
                }`}
                onClick={() => {
                  setSelectedImage(img.url);
                }}
              >
                <img src={base_api_url+ img.url} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-secondary">
            {data?.name}
          </h2>
          <p className="text-md font-normal text-brand-secondary">
            {data?.description}
          </p>
        </div>

        <div className="space-y-2  mt-8">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-medium text-[#587151]">Price:</h2>
            <h2 className="text-xl font-bold text-[#537D5D]">
              ₹{data?.item_price[0].sachet_price}
            </h2>
          </div>

          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-medium text-[#587151]">
              Weekly Bundle Price:
            </h2>
            <h2 className="text-xl font-bold text-[#537D5D]">
              ₹{data?.item_price[0].weekly_price}
            </h2>
          </div>
        </div>

       <ProductItemButton id={data?.id as number}/>
      </div>
    </div>
  );
};

export default ProductViewContent;
