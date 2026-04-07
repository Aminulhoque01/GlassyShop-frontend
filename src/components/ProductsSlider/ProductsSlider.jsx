import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductItems from "../ProductItems/ProductItems";

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider py-5">
      <div className="container">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="sliderHome"
        >
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
          <SwiperSlide>
                <ProductItems/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlider;
