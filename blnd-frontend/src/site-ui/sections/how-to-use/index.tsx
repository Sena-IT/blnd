import HeadingLayout from "@/components/layouts/HeadingLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import { HomeDataHowToUse } from "@/types/types";
import React from "react";

const HowToUse = ({ data }: { data: HomeDataHowToUse }) => {
  return (
    <SectionSpacingLayout>
      <HeadingLayout heading="How To Use" />

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-brand-secondary font-medium text-center">
          {data?.title}
        </h2>
        <p className="text-2xl mt-4 font-normal text-brand-secondary text-justify md:text-center">
          {data?.subtitle}
        </p>
      </div>

      <div className="space-y-4">
      {
        data?.how_to_use_points.map((points,i)=>(
          <div className="rounded-2xl p-4 space-y-2 bg-lime-50" key={i}>
            <h2 className="text-2xl font-semibold text-brand-secondary">
             {points.point_title}
            </h2>
            <p className="text-2xl font-normal text-brand-secondary">
            {points.point_description}
            </p>
          </div>
        ))
      }
      </div>
    </SectionSpacingLayout>
  );
};

export default HowToUse;
