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
import { useRef, useState } from "react";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="slider w-[20%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs height-[100px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group 
                      ${
                      slideIndex===0? "opacity-1" : "opacity-30"
                    }`}
                onClick={() => goto(0)}
              >
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group 
                     ${
                      slideIndex===1? "opacity-1" : "opacity-30"
                    }`}
                onClick={() => goto(1)}
              >
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group 
                      ${
                      slideIndex===2? "opacity-1" : "opacity-30"
                    }`}
                onClick={() => goto(2)}
              >
                <img
                  src={shirt3}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group 
                     ${
                      slideIndex===3? "opacity-1" : "opacity-30"
                    }`}
                onClick={() => goto(3)}
              >
                <img
                  src={shirt4}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group 
                      ${
                      slideIndex===4? "opacity-1" : "opacity-30"
                    }`}
                onClick={() => goto(4)}
              >
                <img
                  src={shirt2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group 
                     ${
                      slideIndex===5? "opacity-1" : "opacity-30"
                    }`}
                onClick={() => goto(5)}
              >
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
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom src={shirt} zoomType="hover" zoomScale={1} />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom src={shirt2                                                       } zoomType="hover" zoomScale={1} />
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
