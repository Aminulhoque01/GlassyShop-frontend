 
import image1 from "../../assets/product/shart1.jpg";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Button, Menu, MenuItem, Rating } from "@mui/material";
import { GoTriangleDown } from "react-icons/go";

const MyListItems = () => {
  
 
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
         

          <div className="flex items-center gap-4 mt-2 mb-2">
            <span className="newPrice  text-[14px] font-[600]">$50.00</span>

            <span className="oldPrice line-through text-gray-500 text-[14px] fon-[500]">
              $58.00
            </span>

            <span className="newPrice text-primary text-[14px] font-[600]">
              $55% OFF
            </span>
          </div>

        

          <Button className="btn-org btn-sm">Add to card</Button>
        </div>
      </div>
    </div>
  );
};

export default MyListItems;
