// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeSliderV2 = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />

            <div
              className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] 
              z-50 p-8 flex items-center flex-col justify-center transition-all duration-700 "
            >
              <h4 className="text-[18px] font-[500] text-left w-full mb-3 relative -right-[100%] opacity-0  ">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                Apple iPhone 13 128 GB, Pink
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] text-left w-full mt-3 relative -right-[100%] opacity-0">
                Starting At Only{" "}
                <span className="text-[40px] font-[700] text-primary ">
                  $59.99
                </span>
              </h3>

              <div className="w-full group relative -bottom-[100%] opacity-0 btn_">
                <Button className="btn-org group-hover:!bg-black ">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" />

            <div
              className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] 
              z-50 p-8 flex items-center flex-col justify-center transition-all duration-700"
            >
              <h4 className="text-[18px] font-[500] text-left w-full mb-3 relative -right-[100%] opacity-0   ">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                Buy New Trend Women Black Cotton Blend Top | top for women | women top...
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] text-left w-full mt-3 relative -right-[100%] opacity-0">
                Starting At Only{" "}
                <span className="text-[40px] font-[700] text-primary">
                  $39.99
                </span>
              </h3>

              <div className="w-full group relative -bottom-[100%] opacity-0 btn_">
                <Button className="btn-org group-hover:!bg-black">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSliderV2;
