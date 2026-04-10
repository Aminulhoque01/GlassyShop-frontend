import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../index.css";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { SiFacebook } from "react-icons/si";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import CartPanel from "../CartPanel/CartPanel";
import { MyContext } from "../../App";

import cb from "../../assets/payment/Cb.png";
import visa from "../../assets/payment/visa.png";
import master from "../../assets/payment/master_card.png";
import american from "../../assets/payment/american_express.png";
import paypal from "../../assets/payment/paypal.png";

const Footer = () => {
  const context = useContext(MyContext);

  const features = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      text: "For all orders over $100",
    },
    {
      icon: <PiKeyReturn />,
      title: "30 Days Returns",
      text: "For an Exchange Product",
    },
    {
      icon: <BsWallet2 />,
      title: "Secured Payment",
      text: "Payment Cards Accepted",
    },
    {
      icon: <FaGift />,
      title: "Special Gifts",
      text: "Our First Product Order",
    },
    {
      icon: <BiSupport />,
      title: "Support 24/7",
      text: "Contact us Anytime",
    },
  ];

  const socials = [SiFacebook, FaYoutube, FaInstagram, FaPinterestP];
  const payments = [cb, visa, master, american, paypal];

  return (
    <>
      <footer className="bg-white pt-8">
        <div className="container mx-auto px-4">
          {/* Top Features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center group"
              >
                <span className="text-[40px] md:text-[45px] lg:text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-2">
                  {item.icon}
                </span>

                <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold mt-3">
                  {item.title}
                </h3>

                <p className="text-[12px] text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <hr className="border-[rgba(0,0,0,0.1)]" />

          {/* Middle Footer */}
          <div className="flex flex-col lg:flex-row gap-10 py-12">
            {/* Contact */}
            <div className="w-full lg:w-[30%]">
              <h2 className="text-[18px] font-semibold mb-4">Contact us</h2>

              <p className="text-[14px] leading-6 text-gray-600">
                Classyshop - Mega Super Store <br />
                507-Union Trade Centre France
              </p>

              <Link to="/" className="link block mt-4">
                sales@yourcompany.com
              </Link>

              <span className="text-[22px] font-semibold block mt-3 text-primary">
                01745208681
              </span>

              <div className="flex items-center gap-3 mt-5">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="text-[15px] font-semibold">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="w-full lg:w-[35%] grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-[18px] font-semibold mb-4">Products</h2>
                <ul className="space-y-2 text-[14px]">
                  <li><Link to="/" className="link">Prices drop</Link></li>
                  <li><Link to="/" className="link">New products</Link></li>
                  <li><Link to="/" className="link">Best sales</Link></li>
                  <li><Link to="/" className="link">Contact us</Link></li>
                  <li><Link to="/" className="link">Sitemap</Link></li>
                  <li><Link to="/" className="link">Stores</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-semibold mb-4">Our company</h2>
                <ul className="space-y-2 text-[14px]">
                  <li><Link to="/" className="link">Delivery</Link></li>
                  <li><Link to="/" className="link">Legal Notice</Link></li>
                  <li><Link to="/" className="link">Terms & Conditions</Link></li>
                  <li><Link to="/" className="link">About us</Link></li>
                  <li><Link to="/" className="link">Secure payment</Link></li>
                  <li><Link to="/" className="link">Login</Link></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full lg:w-[35%]">
              <h2 className="text-[18px] font-semibold mb-4">
                Subscribe to newsletter
              </h2>

              <p className="text-[13px] leading-6 text-gray-600">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>

              <form className="mt-5">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-[45px] border border-gray-300 rounded-md px-4 outline-none focus:border-primary mb-4"
                />

                <Button className="btn-org !text-white !mb-3 w-full sm:w-auto">
                  SUBSCRIBE
                </Button>

                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to terms and privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Strip */}
      <div className="border-t border-[rgba(0,0,0,0.1)] py-4 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social */}
          <ul className="flex items-center gap-3">
            {socials.map((Icon, index) => (
              <li key={index}>
                <Link
                  to="/"
                  className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
                >
                  <Icon className="text-[15px] group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-[13px] text-center text-gray-600">
            © 2025 - Ecommerce software
          </p>

          {/* Payment */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {payments.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="payment"
                className="h-[22px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleDrawer(false)}
        anchor="right"
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-5 px-4 border-b border-[rgba(0,0,0,0.1)]">
          <h4 className="text-[16px] font-semibold">Shopping Cart (1)</h4>

          <IoMdClose
            onClick={context.toggleDrawer(false)}
            className="text-[20px] cursor-pointer"
          />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
