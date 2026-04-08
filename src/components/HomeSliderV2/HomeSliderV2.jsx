import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";
import sliver4 from "../../assets/banner/banner5.webp";
import sliver3 from "../../assets/banner/banner6.webp";

const HomeSliderV2 = () => {
  return (
    <div className="homeSliderWrapper">
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2 rounded-md overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img
              src={sliver4}
              alt="iphone banner"
              className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] object-cover"
            />

            <div
              className="
                info absolute top-0 right-0
                w-full sm:w-[60%] lg:w-[50%]
                h-full z-50
                p-4 sm:p-6 md:p-8
                flex items-start justify-center flex-col
              "
            >
              <h4 className="slide-subtitle text-[12px] sm:text-[14px] md:text-[18px] font-[500] mb-2 md:mb-3">
                Big Saving Days Sale
              </h4>

              <h2 className="slide-title text-[18px] sm:text-[24px] md:text-[30px] lg:text-[35px] font-[700] leading-tight">
                Apple iPhone 13 128 GB, Pink
              </h2>

              <h3 className="slide-price flex flex-wrap items-center gap-2 text-[13px] sm:text-[15px] md:text-[18px] font-[500] mt-2 md:mt-3">
                Starting At Only
                <span className="text-[22px] sm:text-[28px] md:text-[35px] lg:text-[40px] font-[700] text-primary">
                  $59.99
                </span>
              </h3>

              <div className="slide-btn mt-4">
                <Button className="btn-org !text-[12px] sm:!text-[14px]">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img
              src={sliver3}
              alt="fashion banner"
              className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] object-cover"
            />

            <div
              className="
                info absolute top-0 right-0
                w-full sm:w-[60%] lg:w-[50%]
                h-full z-50
                p-4 sm:p-6 md:p-8
                flex items-start justify-center flex-col
              "
            >
              <h4 className="slide-subtitle text-[12px] sm:text-[14px] md:text-[18px] font-[500] mb-2 md:mb-3">
                Big Saving Days Sale
              </h4>

              <h2 className="slide-title text-[18px] sm:text-[24px] md:text-[30px] lg:text-[35px] font-[700] leading-tight">
                Buy New Trend Women Black Cotton Blend Top
              </h2>

              <h3 className="slide-price flex flex-wrap items-center gap-2 text-[13px] sm:text-[15px] md:text-[18px] font-[500] mt-2 md:mt-3">
                Starting At Only
                <span className="text-[22px] sm:text-[28px] md:text-[35px] lg:text-[40px] font-[700] text-primary">
                  $39.99
                </span>
              </h3>

              <div className="slide-btn mt-4">
                <Button className="btn-org !text-[12px] sm:!text-[14px]">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSliderV2;