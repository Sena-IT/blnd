"use client";
import HeadingLayout from "@/components/layouts/HeadingLayout";
import ShopLayout from "@/site-ui/shop/ShopLayout";
import React from "react";
import products from "../../components/product/products.json";
import { ProductListType, ProductType } from "@/site-ui/shop/type";
import ProductItem from "@/components/product/ProductItem";
import { useProducts } from "@/context/ProductsProvider";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
const page = () => {
  const { products } = useProducts();

  return (
    <div className="size-full">
      <SectionSpacingLayout>
        <div className="lg:mt-12 md:mt-10 mt-6">
          <HeadingLayout heading="All Products" />
          <ShopLayout className="mt-6 lg:grid-cols-3 grid-cols-1 grid">
            {products.map((product, i: number) => (
              <React.Fragment key={i}>
                <ProductItem product={product} />
              </React.Fragment>
            ))}
          </ShopLayout>
        </div>
      </SectionSpacingLayout>
    </div>
  );
};

export default page;
