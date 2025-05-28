import HeadingLayout from "@/components/layouts/HeadingLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import { HomeDataChooseUs } from "@/types/types";
import React from "react";

const WhyChooseUs = ({data}:{data:HomeDataChooseUs}) => {
 
  return (
    <SectionSpacingLayout>
      <HeadingLayout heading="Why Choose Us?" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-brand-secondary font-medium text-center">
          {data?.title}
        </h2>
        <p className="text-2xl mt-4 font-normal text-brand-secondary text-justify md:text-center">
          
          {data?.subtitle}
        </p>
        <div className="space-y-4 lg:mt-12 mt-8 flex flex-col items-center justify-center">
          {data?.choose_us_points.map((p, i) => (
            <p key={i} className="text-2xl font-normal text-justify  text-brand-secondary">
              {p.point}
            </p>
          ))}
        </div>
      </div>
    </SectionSpacingLayout>
  );
};

export default WhyChooseUs;
