import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#ffffff]">
      <div className="container">
        <div className="flex items-center justify-center gap-5">
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FaShippingFast className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">Free Shipping</h3>
            <p className="text-[12px] font-[500]">For all orders over $100</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <PiKeyReturn className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">30 Days Returns</h3>
            <p className="text-[12px] font-[500]">For an Exchange Product</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <MdPayment className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">Secured Payment</h3>
            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FaGift className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">Special Gifts</h3>
            <p className="text-[12px] font-[500]">Our First Product Order</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <BiSupport  className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">Support 24/7</h3>
            <p className="text-[12px] font-[500]">Contact us Anytime</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
