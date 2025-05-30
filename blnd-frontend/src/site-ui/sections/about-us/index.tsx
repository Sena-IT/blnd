import { base_api_url } from "@/api/constants";
import HeadingLayout from "@/components/layouts/HeadingLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import { HomeDataAboutUs } from "@/types/types";
import React from "react";

const AboutUs = ({ data }: { data: HomeDataAboutUs }) => {
  return (
    <div >
      <SectionSpacingLayout id="about-us"   className="bg-pink-50 rounded-2xl p-4">
        <HeadingLayout heading="About Us" />
        <h2 className="text-3xl text-brand-secondary font-medium text-center">
          {data.title}
        </h2>

        <div className="space-y-4 mt-10">
          {data?.about_us_section.map((sec, i) => (
            <React.Fragment key={i}>
              <div
                className={`flex flex-col rounded-2xl items-start lg:p-6 ${
                  i % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse "
                } space-x-4`}
              >
                <div className="md:w-1/3 w-full flex-col flex items-center justify-center">
                  <h2
                    className={`text-5xl text-center ${
                      i % 2 === 0 ? "md:text-left" : "md:text-right"
                    } font-semibold text-red-600`}
                  >
                    {sec.section_title}
                  </h2>
                  <div>
                    <img
                      src={base_api_url + sec.about_us_media.url}
                      className="h-[500px] w-[500px] object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 w-full" key={i}>
                  <div
                    className="text-xl lg:text-3xl lg:leading-12 lg:mt-0 mt-4 text-brand-secondary font-normal text-justify"
                    dangerouslySetInnerHTML={{
                      __html: sec.section_description,
                    }}
                  />
                </div>
              </div>
              
            </React.Fragment>
          ))}
        </div>
      </SectionSpacingLayout>
    </div>
  );
};

export default AboutUs;
