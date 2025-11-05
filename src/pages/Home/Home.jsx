import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import HomeCartSlid from "../../components/HomeCartSlid/HomeCartSlid"
import HomeSlider from "../../components/HomeSlider/HomeSlider"
import ProductCart from "../../components/ProductCart/ProductCart"
import { FaShippingFast } from "react-icons/fa";

 

const Home = ()=>{
    return(
        <div className=" ">
            <HomeSlider/>
            <HomeCartSlid/>

            <div className="py-16 bg-white">
                <div className="container">
                    <div className="freeShipping w-full p-4 mb-7 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
                        <div className="col1 items-center flex gap-4">
                            <FaShippingFast  className="text-[50px]"/>
                            <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
                        </div>

                        <div className="col2">
                            <p className="md-0 font-[500]">Free Delivery Now on Your Order and over $200</p>
                        </div>

                        <p className="font-bold text-[25px]">- Only $200*</p>
                    </div>


                    <AdsBannerSlider items={4}/>
                </div>

            </div>
            <ProductCart/> 

        </div>
    )
}

export default Home