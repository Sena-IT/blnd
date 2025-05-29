import ContentLayout from "@/components/layouts/ContentLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import CartContent from "@/site-ui/cart/CartContent";
import React from "react";

const page = () => {
  return (
    <ContentLayout>
      <SectionSpacingLayout>
        <CartContent />
      </SectionSpacingLayout>
    </ContentLayout>
  );
};

export default page;
