import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import shirt from "../../assets/product/shart1.jpg";
import shirt2 from "../../assets/product/shart2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const ProductZoom = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="slider w-[30%]">
          <Swiper
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="zoomProductSliderThumbs"
          >
            <SwiperSlide>
              <div className="item">
                <img src={shirt2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img src={shirt2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img src={shirt2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img src={shirt2} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[70%]">
          <InnerImageZoom src={shirt} zoomType="hover" zoomScale={1} />
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
