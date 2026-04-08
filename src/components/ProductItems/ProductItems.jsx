import { Link } from "react-router-dom";
import "../ProductItems/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { MyContext } from "../../App";
import shirt from "../../assets/product/shart1.jpg";

const ProductItems = () => {
  const context = useContext(MyContext);

  return (
    <div
      className="
        productItem
        shadow-lg
        rounded-xl
        overflow-hidden
        border border-gray-200
        bg-white
        w-full
        transition-all duration-300
        hover:shadow-xl
      "
    >
      {/* Product Image */}
      <div className="group imageWrapper w-full rounded-md relative">
        <Link to={`/productDetails/1`}>
          <div className="img relative overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px]">
            <img
              src={shirt}
              alt="product"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
              alt="hover-product"
              className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Discount Badge */}
        <span
          className="
            discount
            flex items-center
            absolute top-2 left-2 z-50
            bg-primary text-white
            rounded-md px-2 py-1
            text-[10px] sm:text-[12px]
            font-medium
          "
        >
          10%
        </span>

        {/* Action Buttons */}
        <div
          className="
            actions
            absolute top-2 right-2 z-50
            flex items-end gap-2 flex-col
            opacity-100 md:opacity-0
            md:group-hover:opacity-100
            md:top-[-200px]
            md:group-hover:top-[15px]
            transition-all duration-500
          "
        >
          <Tooltip title="favorite" placement="left-start">
            <Button
              className="
                !w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px]
                !min-w-[32px]
                !rounded-full
                !text-black
                !bg-white
                hover:!bg-primary
              "
            >
              <FaRegHeart className="text-[16px] sm:text-[18px]" />
            </Button>
          </Tooltip>

          <Tooltip title="compare" placement="left-start">
            <Button
              className="
                !w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px]
                !min-w-[32px]
                !rounded-full
                !text-black
                !bg-white
                hover:!bg-primary
              "
            >
              <LuGitCompareArrows className="text-[16px] sm:text-[18px]" />
            </Button>
          </Tooltip>

          <Tooltip title="view details" placement="left-start">
            <Button
              onClick={() => context.setOpenProductDetailsModal(true)}
              className="
                !w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px]
                !min-w-[32px]
                !rounded-full
                !text-black
                !bg-white
                hover:!bg-primary
              "
            >
              <MdZoomOutMap className="text-[16px] sm:text-[18px]" />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Product Info */}
      <div className="info p-3 sm:p-4 md:p-5 bg-[#f9f9f9]">
        <h6 className="text-[12px] sm:text-[13px] md:text-[14px]">
          <Link to="/" className="link transition-all hover:text-primary">
            Soylent Green
          </Link>
        </h6>

        <h3
          className="
            text-[13px] sm:text-[14px] md:text-[15px]
            title mt-1 mb-2
            font-medium
            text-gray-800
            line-clamp-2
          "
        >
          <Link to="/" className="link transition-all hover:text-primary">
            Siril Georgette pink color Saree with Blouse piece
          </Link>
        </h3>

        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
          size="small"
        />

        <div className="flex items-center gap-3 mt-2">
          <span className="oldPrice line-through text-gray-500 text-[13px] sm:text-[14px] md:text-[15px]">
            $58.00
          </span>
          <span className="newPrice text-primary text-[14px] sm:text-[15px] md:text-[16px] font-semibold">
            $50.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;