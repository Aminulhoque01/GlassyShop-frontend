import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import HomeCartSlid from "../../components/HomeCartSlid/HomeCartSlid";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import ProductCart from "../../components/ProductsSlider/ProductsSlider";
import { FaShippingFast } from "react-icons/fa";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";

const Home = () => {
   const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className=" ">
      <HomeSlider />
      <HomeCartSlid />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSection">
              <h2 className="text-[22px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March
              </p>
            </div>

            <div className="rightSection w-[60%] ">
               
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
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

      <div className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto p-4 mb-7 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 items-center flex gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="md-0 font-[500]">
                Free Delivery Now on Your Order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </div>
     
    </div>
  );
};

export default Home;
