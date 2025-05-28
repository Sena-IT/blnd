import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutProductList from "@/components/checkout/CheckoutProductList";
import React from "react";

const page = () => {
  return (
     <div className="w-full h-full p-3 flex flex-col-reverse lg:mt-12 mt-6">
      <div className="w-full h-full overflow-y-auto mt-10">
        <CheckoutForm />
      </div>

      <div className="w-full">
        <CheckoutProductList />
      </div>
    </div>
  );
};

export default page;
