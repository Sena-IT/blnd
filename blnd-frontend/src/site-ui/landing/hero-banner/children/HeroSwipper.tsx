"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { HomeDataBannerImageType } from "@/types/types";
import { base_api_url } from "@/api/constants";

const HeroSwiper = ({ banner }: { banner: HomeDataBannerImageType[] }) => {
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        speed={2000}
        loop={true}
        touchReleaseOnEdges={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        pagination={{
          clickable: true,
        }}
        initialSlide={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        modules={[FreeMode, Pagination, Mousewheel, Autoplay]}
        className="mySwiper w-full h-full rounded-2xl overflow-hidden"
      >
        {banner?.map((img, i) => (
          <SwiperSlide className="w-full h-full" key={i}>
            <div className="size-full">
              <img
                src={base_api_url+img.banner_image_link[0].url}
                className="max-h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </React.Fragment>
  );
};

export default HeroSwiper;
