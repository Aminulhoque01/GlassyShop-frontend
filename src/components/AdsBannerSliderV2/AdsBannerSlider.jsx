import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
// import banner1 from "../../assets/banner/banner1.png";
// import banner2 from "../../assets/banner/banner2.jpg";
// import banner3 from "../../assets/banner/banner3.jpg";
// import banner4 from "../../assets/banner/banner4.jpg";
// import banner5 from "../../assets/banner/banner5.webp";
// import banner6 from "../../assets/banner/banner6.webp";
import BannerBox from "../BannerBox/BannerBox";
import BannerBoxV2 from "../BannerBoxV2/BannerBoxV2";

const AdsBannerSliderV2 = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="sliderHome"
      >
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default AdsBannerSliderV2;
