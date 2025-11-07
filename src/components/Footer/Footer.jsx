import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";

import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#ffffff]">
      <div className="container">
        <div className="flex items-center justify-center gap-5 py-8 pb-8">
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
            <BsWallet2 className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">Secured Payment</h3>
            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FaGift className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">Special Gifts</h3>
            <p className="text-[12px] font-[500]">Our First Product Order</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2" />

            <h3 className="text-[16px] font-[600] mt-2">Support 24/7</h3>
            <p className="text-[12px] font-[500]">Contact us Anytime</p>
          </div>
        </div>

        <hr />

        <div className="footer flex items-center py-8">
          <div className="part1 w-[25%]">
            <h2 className="text-[20px] font-[600] mb-4">Contact us</h2>
            <p className="text-[14px] font-[400]">
              Classyshop - Mega Super Store <br />
              507-Union Trade Centre France
            </p>

            <br />
            <Link className="link" to="ami@gmail.com">
              sales@yourcompany.com
            </Link>

            <span className="text-[22px] font-[600] block w-full mt-3 text-primary">
              01745208681
            </span>

            <div className="flex items-center gap-2 mt-2">
              <p><IoChatboxOutline  className="text-[50px] text-primary"/></p>
              <span className="text-[16px] font-[600]  ">
                Online Chat <br />
                Get Expert Help
              </span>
            </div>
          </div>

          <div className="part2 w-[40%] flex items-center py-8">
            <div className="part2_col1 w-[50%]">
              <h2 className="text-[20px] font-[600] mb-4">Products</h2>
              
              <ul className="list">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Prices drop</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">New products</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Best sales</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Contact us</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Sitemap</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Stores</Link>
                </li>
              </ul>
            </div>

            <div className="part2_col2 w-[50%]">
              <h2 className="text-[20px] font-[600] mb-4">Our company</h2>
              
              <ul className="list">
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Delivery</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Legal Notice</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Terms and conditions of use</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">About us</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Secure payment</Link>
                </li>
                <li className="list-none text-[14px] w-full mb-2">
                  <Link to="/" className="link">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
