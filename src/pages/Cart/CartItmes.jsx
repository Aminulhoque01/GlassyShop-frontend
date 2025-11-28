import { useState } from "react";
import image1 from "../../assets/product/shart1.jpg";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Menu, MenuItem, Rating } from "@mui/material";
import { GoTriangleDown } from "react-icons/go";

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, SetSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, SetSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      SetSelectedSize(value);
    }
  };


   const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      SetSelectedQty(value);
    }
  };

  return (
    <div>
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
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
          <div className="flex items-center gap-4 mt-2">
            <div className="relative">
              <span
                onClick={handleClickSize}
                className="flex items-center justify-center bg-[#f1f1f1f1] text-[11px] font-[600] py-1 px-2 cursor-pointer rounded-md  "
              >
                Size: {selectedSize} <GoTriangleDown />
              </span>

              <Menu
                id="basic-menu"
                anchorEl={sizeAnchorEl}
                open={openSize}
                onClose={() => handleCloseSize(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
                <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
                <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
                <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
              </Menu>
            </div>

            <div className="relative">
              <span onClick={handleClickQty} className="flex items-center justify-center bg-[#f1f1f1f1] text-[11px] font-[600] py-1 px-2 cursor-pointer rounded-md  ">
                Qty : {selectedQty}<GoTriangleDown />
              </span>

               <Menu
                id="basic-menu"
                anchorEl={qtyAnchorEl}
                open={openQty}
                onClose={() => handleCloseQty(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
                <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
                <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
                <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
                <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
                <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
                <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
                <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
                <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
                <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="newPrice  text-[14px] font-[600]">$50.00</span>

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
  );
};

export default CartItems;
