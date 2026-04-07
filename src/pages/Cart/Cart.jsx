import { Link } from "react-router-dom";

import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Rating } from "@mui/material";
import { IoBagCheckSharp } from "react-icons/io5";
import CartItems from "./CartItmes";
 

const CartPage = () => {
  
  return (
    <section className="section py-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md   bg-white pb-10">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="text-bold text-primary"> 2 </span>{" "}
                products in your Cart
              </p>
            </div>
            
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
            <CartItems size='S' qty={1}/>
          </div>
        </div>

        <div className="rightPart w-[30%] ">
          <div className="shadow-md rounded-md bg-white p-5">
            <h4 className="pb-5 font-[600]">Cart Totals</h4>
            <hr />

            <p className="flex items-center justify-between mt-2">
              <span className="text-[16px] font-[400]">Subtotal</span>
              <span className="text-primary font-bold">$1,300.00</span>
            </p>

            <p className="flex items-center justify-between mt-2">
              <span className="text-[16px] font-[400]">Shipping</span>
              <span className="  font-bold">Free</span>
            </p>

            <p className="flex items-center justify-between mt-2">
              <span className="text-[16px] font-[400]">Estimate for</span>
              <span className="  font-bold">Us</span>
            </p>

            <p className="flex items-center justify-between mt-2 mb-5">
              <span className="text-[16px] font-[400]">Total</span>
              <span className=" text-primary font-bold">$1,3000.00</span>
            </p>

            <Button className="btn-org btn-lg w-full flex gap-2">
              {" "}
              <IoBagCheckSharp className="text-[20px]" /> Checkout{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
