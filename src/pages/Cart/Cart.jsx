import { Link } from "react-router-dom";
import image1 from "../../assets/product/shart1.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Rating } from "@mui/material";
import { IoBagCheckSharp } from "react-icons/io5";
import { useState } from "react";

const CartPage = () => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, SetSelectedSize]= useState("S")
  const openSize = Boolean(sizeAnchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = () => {
    setSizeAnchorEl(null);
  };

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
            <div className="cartItem w-full p-2 flex items-center gap-4 pb-5 !border-b !border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden group">
                <Link to="/productDetails/:id ">
                  <img
                    src={image1}
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[15px] right-[15px] text-[20px] link transition-all" />
                <span className="text-[16px]">Sangria</span>
                <h3 className="text-[18px] font-[600]">
                  <Link to="/productDetails/:id" className="link">
                    A-Line Kurti with Sharara & Dupatta
                  </Link>
                </h3>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                />
                <div className="flex items-center gap-4 mt-2">
                  <div className="relative">
                    <span onClick={handleClickSize} className="flex items-center justify-center bg-[#f1f1f1f1] text-[11px] font-[600] py-1 px-2 cursor-pointer rounded-md  ">
                      Size: S <GoTriangleDown />
                    </span>

                    <Menu
                      id="basic-menu"
                      anchorEl={sizeAnchorEl}
                      open={openSize}
                      onClose={handleCloseSize}
                      slotProps={{
                        list: {
                          "aria-labelledby": "basic-button",
                        },
                      }}
                    >
                      <MenuItem onClick={handleCloseSize}>M</MenuItem>
                      <MenuItem onClick={handleCloseSize}>L</MenuItem>
                      <MenuItem onClick={handleCloseSize}>XL</MenuItem>
                      <MenuItem onClick={handleCloseSize}>XXL</MenuItem>
                    </Menu>
                  </div>

                  <div className="relative">
                    <span className="flex items-center justify-center bg-[#f1f1f1f1] text-[11px] font-[600] py-1 px-2 cursor-pointer rounded-md  ">
                      Qty 1<GoTriangleDown />
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <span className="newPrice  text-[14px] font-[600]">
                    $50.00
                  </span>

                  <span className="oldPrice line-through text-gray-500 text-[14px] fon-[500]">
                    $58.00
                  </span>

                  <span className="newPrice text-primary text-[14px] font-[600]">
                    $55% OFF
                  </span>
                </div>
              </div>
            </div>
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
