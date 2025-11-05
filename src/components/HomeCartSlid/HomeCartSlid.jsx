import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
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
    <div className="homeCatSlider pt-4 py-8 ">
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          
          modules={[Navigation, Pagination]}
          className="sliderHome"
        >
          <SwiperSlide>
            <Link to="/fashion">
              <div className="items bg-white px-3 py-4 rounded-sm text-center flex items-center justify-center flex-col w-full ">
                <img src={product1} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/electronics">
              <div className="items bg-white p-3 py-4 rounded-sm text-center flex items-center justify-center flex-col w-full ">
                <img src={product2} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/bug">
              <div className="items bg-white px-3 py-4 rounded-sm text-center flex items-center justify-center flex-col w-full ">
                <img src={product3} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Bug</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/footwear">
              <div className="items bg-white px-3  py-4 rounded-sm text-center flex items-center justify-center flex-col w-full  ">
                <img src={product4} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/groceries">
              <div className="items bg-white px-3 py-4 rounded-sm text-center flex items-center justify-center flex-col w-full  ">
                <img src={product5} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/beauty">
              <div className="items bg-white px-3 py-4 rounded-sm text-center flex items-center justify-center flex-col w-full  ">
                <img src={product6} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/Wellness">
              <div className="items bg-white px-3 py-4 rounded-sm text-center flex items-center justify-center flex-col w-full  ">
                <img src={product7} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/Jewellery">
              <div className="items bg-white px-3 py-4 rounded-sm text-center flex items-center justify-center flex-col w-full  ">
                <img src={product8} alt="product" className="w-full" />
                <h3 className="text-[15px] font-[500] mt-3">Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCartSlid;
