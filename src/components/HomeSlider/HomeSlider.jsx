import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "./../../assets/HomeSlider/slider1.jpg";
import slider2 from "./../../assets/HomeSlider/slider2.jpg";
import slider3 from "./../../assets/HomeSlider/slider3.jpg";
import slider4 from "./../../assets/HomeSlider/slider4.jpg";

const HomeSlider = () => {
  return (
    <div className="HomeSlider py-4">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={slider1} alt="slider1" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={slider2} alt="slider2" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={slider3} alt="slider3" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={slider4} alt="slider4" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
