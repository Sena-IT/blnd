import HeadingLayout from "@/components/layouts/HeadingLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import { HomeDataSetUsApart } from "@/types/types";
import React from "react";

const SetUsApart = ({data}:{data:HomeDataSetUsApart}) => {
 
  return (
    <SectionSpacingLayout>
      <HeadingLayout heading="What Sets Us Apart?" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-brand-secondary font-medium text-center">
          {data.title}
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
         {
           data.set_us_apart_points.map((c,i)=>(
                <div key={i} className="rounded-2xl px-4 py-4 md:h-[150px] font-semibold ring-2 ring-brand-primary bg-white space-y-6">
                    <h2 className="text-2xl text-center text-brand-secondary font-medium">
                      {c.point_title}
                    </h2>

                    <p className="text-xl  text-brand-secondary font-normal text-center">
                      {c.point_description}
                    </p>
                </div>
            ))
         }
        </div>
      </div>
    </SectionSpacingLayout>
  );
};

export default SetUsApart;
