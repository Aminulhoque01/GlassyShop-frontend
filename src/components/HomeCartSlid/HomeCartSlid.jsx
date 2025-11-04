import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import product1 from "../../assets/product/product1.png";
import product2 from "../../assets/product/product2.png";
import product3 from "../../assets/product/product3.png";
import product4 from "../../assets/product/product4.png";
import product5 from "../../assets/product/product5.png";
import product6 from "../../assets/product/product6.png";
import product7 from "../../assets/product/product7.png";
import product8 from "../../assets/product/product8.png";

const HomeCartSlid = () => {
  return (
    <div className="HomeCatSlider  ">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="items bg-white px-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product1} alt="product" className="w-full" />
              <h3>Fashion</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items bg-white p-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product2} alt="product" className="w-full" />
              <h3>Electronics</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items bg-white px-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product3} alt="product" className="w-full" />
              <h3>Bug</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items bg-white px-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product4} alt="product" className="w-full" />
              <h3>Footwear</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items bg-white px-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product5} alt="product" className="w-full" />
              <h3>Groceries</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="items bg-white px-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product6} alt="product" className="w-full" />
              <h3>Beauty</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="items bg-white px-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product7} alt="product" className="w-full" />
              <h3>Wellness</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="items bg-white px-3 rounded-sm text-center flex items-center justify-center flex-col">
              <img src={product8} alt="product" className="w-full" />
              <h3>Jewellery</h3>
            </div>
          </SwiperSlide>

           
        </Swiper>
      </div>
       

    </div>
  );
};

export default HomeCartSlid;
