 



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductItems from "../ProductItems/ProductItems";

const ProductsSlider = () => {
  return (
    <div className="productsSlider py-5">
      <div className="container">
        <Swiper
          spaceBetween={15}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="sliderHome"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItems />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlider;