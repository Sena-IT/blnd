import HeadingLayout from "@/components/layouts/HeadingLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import ShopLayout from "@/site-ui/shop/ShopLayout";
import React from "react";
import products from "../../../components/product/products.json";
import { ProductListType } from "@/site-ui/shop/type";
import ProductItem from "@/components/product/ProductItem";

const ShopBlnd = () => {
  const data = products as ProductListType;

  return (
    <SectionSpacingLayout>
      <HeadingLayout heading="Shop Our Functional Blends" />
      <div className="flex flex-col items-center justify-center">

         <h2 className="text-3xl text-brand-secondary font-medium text-center">
          A Functional Wellness Brand That Actually Works
        </h2>
        <ShopLayout className="mt-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid">
          {data.map((product, i: number) => (
            <React.Fragment key={i}>
              <ProductItem product={product} />
            </React.Fragment>
          ))}
        </ShopLayout>
      </div>
    </SectionSpacingLayout>
  );
};

export default ShopBlnd;
