import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import HomeCartSlid from "../../components/HomeCartSlid/HomeCartSlid";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { FaShippingFast } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BlogItem from "../../components/BlogItem/BlogItem";
import Footer from "../../components/Footer/Footer";
import HomeSliderV2 from "../../components/HomeSliderV2/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2/BannerBoxV2";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2/AdsBannerSlider";
import banner1 from "../../assets/banner/banner4.jpg";
import banner2 from "../../assets/banner/banner3.jpg";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
      <HomeCartSlid />

      {/* Popular Products */}
      <section className="bg-white py-6 md:py-8">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="leftSection">
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-[600]">
                Popular Products
              </h2>
              <p className="text-[13px] sm:text-[14px] font-[400]">
                Do not miss the current offers until the end of March
              </p>
            </div>

            <div className="rightSection w-full lg:w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="jewellery" />
              </Tabs>
            </div>
          </div>
        </div>
        <ProductsSlider items={6} />
      </section>

      {/* Banner + Slider */}
      <section className="bg-white py-5">
        <div className="container px-4 flex flex-col lg:flex-row gap-5">
          <div className="part1 w-full lg:w-[70%]">
            <HomeSliderV2 />
          </div>

          <div className="part2 w-full lg:w-[30%] flex flex-col gap-5">
            <BannerBoxV2 info="left" image={banner1} />
            <BannerBoxV2 info="right" image={banner2} />
          </div>
        </div>
      </section>

      {/* Free Shipping */}
      <div className="py-10 md:py-16 bg-white">
        <div className="container px-4">
          <div
            className="
              freeShipping
              w-full lg:w-[80%]
              m-auto
              p-4
              mb-7
              border-2 border-[#ff5252]
              flex flex-col md:flex-row
              items-center
              justify-between
              gap-4
              rounded-md
              text-center md:text-left
            "
          >
            <div className="col1 items-center flex gap-4">
              <FaShippingFast className="text-[35px] md:text-[50px]" />
              <span className="text-[16px] md:text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="font-[500] text-[14px] md:text-[16px]">
                Free Delivery Now on Your Order and over $200
              </p>
            </div>

            <p className="font-bold text-[20px] md:text-[25px]">
              - Only $200*
            </p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </div>

      {/* Latest Products */}
      <section className="py-5 pt-0 bg-white">
        <div className="container px-4">
          <h2 className="text-[18px] md:text-[22px] font-[600]">
            Latest Products
          </h2>
          <ProductsSlider items={6} />
          <AdsBannerSliderV2 items={3} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5 pt-0 bg-white">
        <div className="container px-4">
          <h2 className="text-[18px] md:text-[22px] font-[600]">
            Featured Products
          </h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      {/* Blog */}
      <section className="py-5 pt-0 bg-white blogSection">
        <div className="py-5 container px-4">
          <h2 className="text-[18px] md:text-[20px] font-[600] mb-4">
            From The Blog
          </h2>

          <Swiper
            spaceBetween={20}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="blogSlider"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;