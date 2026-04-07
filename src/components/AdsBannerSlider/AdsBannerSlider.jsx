import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation,Pagination } from "swiper/modules";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import banner4 from "../../assets/banner/banner4.jpg";
import banner5 from "../../assets/banner/banner5.webp";
import banner6 from "../../assets/banner/banner6.webp";
import BannerBox from "../BannerBox/BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true} 
        
        modules={[Navigation,Pagination]}
        className="sliderHome"
      >
        <SwiperSlide>
          <BannerBox img={banner1} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={banner4} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={banner5} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={banner6} />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};
export default AdsBannerSlider;
