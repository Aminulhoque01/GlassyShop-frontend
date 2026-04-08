import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import product1 from "../../assets/product/product1.png";
import product2 from "../../assets/product/product2.png";
import product3 from "../../assets/product/product3.png";
import product4 from "../../assets/product/product4.png";
import product5 from "../../assets/product/product5.png";
import product6 from "../../assets/product/product6.png";
import product7 from "../../assets/product/product7.png";
import product8 from "../../assets/product/product8.png";
import { Link } from "react-router-dom";

const HomeCartSlid = () => {
  return (
    <div className="homeCatSlider pt-4 py-6 md:py-8 bg-[#f8f8f8]">
      <div className="container px-4">
        <Swiper
          spaceBetween={15}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="sliderHome"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <Link to="/fashion">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product1}
                  alt="Fashion"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Fashion
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/electronics">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product2}
                  alt="Electronics"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Electronics
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/bug">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product3}
                  alt="Bag"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Bag
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/footwear">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product4}
                  alt="Footwear"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Footwear
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/groceries">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product5}
                  alt="Groceries"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Groceries
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/beauty">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product6}
                  alt="Beauty"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Beauty
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/wellness">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product7}
                  alt="Wellness"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Wellness
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/jewellery">
              <div className="items bg-white px-3 py-4 rounded-lg text-center flex items-center justify-center flex-col shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product8}
                  alt="Jewellery"
                  className="w-[55px] sm:w-[65px] md:w-[75px] object-contain"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-[500] mt-3">
                  Jewellery
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCartSlid;