import { base_api_url } from "@/api/constants";
import HeadingLayout from "@/components/layouts/HeadingLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import { HomeDataAboutUs } from "@/types/types";
import React from "react";

const AboutUs = ({ data }: { data: HomeDataAboutUs }) => {
  return (
    <div>
      <SectionSpacingLayout
        id="about-us"
        className="bg-pink-50 rounded-2xl p-4"
      >
        <HeadingLayout heading="About Us" />
        <h2 className="text-3xl text-brand-secondary font-medium text-center">
          {data.title}
        </h2>

        <div className="space-y-10 mt-10">
          {data?.about_us_section.map((sec, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-6 items-stretch`}
            >
              <div className="w-full flex flex-col">
                <h2
                  className={`text-5xl font-semibold text-red-600 mb-4 ${
                    i % 2 === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {sec.section_title}
                </h2>
                <div className="w-full">
                  <div className="text-justify text-2xl leading-9 text-brand-secondary">
                    <img
                      src={base_api_url + sec.about_us_media.url}
                      alt="About Us Media"
                      className="w-full  md:w-1/3 mb-4 mr-0 sm:mr-0 md:mr-6 rounded-lg object-cover float-none md:float-left"
                    />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: sec.section_description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionSpacingLayout>
    </div>
  );
};

export default AboutUs;
