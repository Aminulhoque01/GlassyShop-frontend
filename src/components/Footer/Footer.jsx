import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";

import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../index.css";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { SiFacebook } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

import cb from "../../assets/payment/Cb.png"
import visa from "../../assets/payment/visa.png"
import master from "../../assets/payment/master_card.png"
import american from "../../assets/payment/american_express.png"
import paypal from "../../assets/payment/paypal.png"
import { IoMdClose } from "react-icons/io";

import Drawer from "@mui/material/Drawer";
 
import { useContext } from "react";
import CartPanel from "../CartPanel/CartPanel";
import { MyContext } from "../../App";


const Footer = () => {
  
  const context = useContext(MyContext)
  return (
    <>
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

          <div className="footer flex items-center py-12">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
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
                <p>
                  <IoChatboxOutline className="text-[50px] text-primary" />
                </p>
                <span className="text-[16px] font-[600]  ">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex items-center py-8 pl-8 border-r border-[rgba(0,0,0,0.1)]">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Secure payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2_col2 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about <br />{" "}
                special discounts.
              </p>

              <form action="" className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-md mb-4
                 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />

                <Button className="btn-org text-white">SUBSCRIBE</Button>

                <FormControlLabel
                  control={<Checkbox defaultUnChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
          <div className="container flex items-center justify-between">
            <ul className="flex items-center gap-4">
              <li className="list-none">
                <Link to='/'target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"><SiFacebook className="text-[15px]   group-hover:text-white"/></Link>
              </li>
              <li className="list-none">
                <Link to='/'target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"><FaYoutube className="text-[15px]   group-hover:text-white" /></Link>
              </li>
              <li className="list-none">
                <Link to='/'target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"><FaInstagram className="text-[15px]   group-hover:text-white"/></Link>
              </li>
              <li className="list-none">
                <Link to='/'target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all">
                <FaPinterestP className="text-[15px]   group-hover:text-white"/></Link>
              </li>
            </ul>

            <p className="text-[13px] text-center mb-0">@ 2025 - Ecommerce software </p>

            <div className="flex items-center gap-2">
              <img src={cb} alt="image" />
              <img src={visa} alt="image" />
              <img src={master} alt="image" />
              <img src={american} alt="image" />
              <img src={paypal} alt="image" />
            </div>

          </div>
      </div>

      {/* Cart panel */}
      <Drawer open={context.openCartPanel} onClose={context.toggleDrawer(false)} anchor={'right'}
       className="cartPanel " >
        <div className="flex items-center  justify-between py-5 px-4 gap-5 border-b border-[rgba(0,0,0,0.1)]">
           <h4 className="text-[16px] font-[600]">Shopping Cart (1)</h4><IoMdClose  onClick={context.toggleDrawer(false)} className="text-[20px] cursor-pointer" />
        </div>

        <CartPanel></CartPanel>
        
      </Drawer>
    </>


  );
};

export default Footer;
