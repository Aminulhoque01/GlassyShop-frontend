import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import shirt from "../../assets/product/shart1.jpg";
import shirt2 from "../../assets/product/shart2.jpg";
import shirt3 from "../../assets/product/shirt3.jpg";
import shirt4 from "../../assets/product/shirt4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import "./style.css";

const ProductZoom = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="slider w-[20%]">
          <Swiper
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs height-[100px] overflow-hidden"
          >
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={shirt3}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={shirt4}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[80%]   overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            
          >
            <SwiperSlide>
              <InnerImageZoom src={shirt} zoomType="hover" zoomScale={1} />
            </SwiperSlide>
             
            <SwiperSlide>
              <InnerImageZoom src={shirt2} zoomType="hover" zoomScale={1} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom src={shirt3} zoomType="hover" zoomScale={1} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom src={shirt4} zoomType="hover" zoomScale={1} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
