import { Link } from "react-router-dom";
import image1 from "../../assets/product/shart1.jpg";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-5 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-2 border-[rgba(0,0,0,0.1)]  p-1 mb-4">
          <div className="img w-[25%] overflow-hidden h-[100px]  ">
           <Link to="/productDetails/:id" className="block group"> <img src={image1} alt="" className="w-full rounded-md group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500]">
             <Link to="/productDetails/:id" className="link transition-all"> A-Line kurti with Sharara & Dupatta</Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>2</span>
              </span>
              <span className="text-primary font-bold">Price: $50</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-2 border-[rgba(0,0,0,0.1)]  p-1 mb-4">
          <div className="img w-[25%] overflow-hidden h-[100px]  ">
           <Link to="/productDetails/:id" className="block group"> <img src={image1} alt="" className="w-full rounded-md group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500]">
             <Link to="/productDetails/:id" className="link transition-all"> A-Line kurti with Sharara & Dupatta</Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>2</span>
              </span>
              <span className="text-primary font-bold">Price: $50</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-2 border-[rgba(0,0,0,0.1)]  p-1 mb-4">
          <div className="img w-[25%] overflow-hidden h-[100px]  ">
           <Link to="/productDetails/:id" className="block group"> <img src={image1} alt="" className="w-full rounded-md group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500]">
             <Link to="/productDetails/:id" className="link transition-all"> A-Line kurti with Sharara & Dupatta</Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>2</span>
              </span>
              <span className="text-primary font-bold">Price: $50</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-2 border-[rgba(0,0,0,0.1)]  p-1 mb-4">
          <div className="img w-[25%] overflow-hidden h-[100px]  ">
           <Link to="/productDetails/:id" className="block group"> <img src={image1} alt="" className="w-full rounded-md group-hover:scale-105" /></Link>
          </div>

          <div className="info w-[75%] relative">
            <h4 className="text-[14px] font-[500]">
             <Link to="/productDetails/:id" className="link transition-all"> A-Line kurti with Sharara & Dupatta</Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>2</span>
              </span>
              <span className="text-primary font-bold">Price: $50</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        
      
      </div>
      <br />
      <div className="buttomSec absolute bottom-[5px] left-[10px] w-full pr-5">
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">3 Items</span>
            <span className="text-primary font-bold">$150.00</span>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-primary font-bold">$15.00</span>
          </div>
        </div>

        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total(tax excl)</span>
            <span className="text-primary font-bold">$165.00</span>
          </div>
          <br />

          <div className="flex items-center justify-between w-full gap-5  ">
           <Link to="/cart" className="w-[50%]"><Button className="btn-org btn-lg w-full ">View Cart</Button></Link>
            <Link to="/checkout" className="w-[50%]"><Button className="btn-org btn-border btn-lg w-full ">Checkout</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
