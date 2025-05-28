import { getHomeData } from "@/api/call";
import { HomeDataType } from "@/types/types";
import React from "react";

const Footer = async () => {
  const data: HomeDataType = await getHomeData();

  return (
    <div className="lg:px-10 px-6">
      <div className="flex flex-col space-y-4 mt-10">
        <div className="h-[2px] bg-neutral-200 backdrop-blur-2xl" />
        <div className="flex flex-row items-center justify-center py-4">
          <p className="text-2xl text-brand-secondary font-semibold text-center">
            {data?.footer.footer_content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
