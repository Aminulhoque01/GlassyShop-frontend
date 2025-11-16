import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import "./style.css";
import { useState } from "react";
import QtyBox from "../../components/QtyBox/QtyBox";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { IoGitCompareSharp } from "react-icons/io5";


const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <div className="  pb-0">
        <div className="container py-5">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Cropped satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-5">
          <div className="productZoomContainer w-[30%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] items-center">
            <h1 className="text-[22px] font-[600]">Boys Shirt Chikankari Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.</h1>

            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brands:
                <span className="font-[500] text-black opacity-75">
                  House of Chikankari
                </span>
              </span>

              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />

              <span className="text-[13px] cursor-pointer text-[#666]">
                Review (5)
              </span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] fon-[500]">
                $58.00
              </span>
              <span className="newPrice text-primary text-[18px] font-[600]">
                $50.00
              </span>
              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 items
                </span>
              </span>
            </div>

            <p className="text-[14px]  mt-3 pr-10 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. 
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-[14px] mt-4 mb-2">
              Free Shipping (Est.Delivery Time 2-3)
            </p>
            <div className="flex items-center gap-2  ">
              <div className="qtyBoxWrapper w-[70px]">
                <QtyBox />
              </div>

              <Button className="btn-org flex gap-2">
                <IoMdCart className="text-[20px]" />
                Ad to Cart
              </Button>
            </div>

            <div className="flex items-center mt-4 gap-4">
              <span className="flex items-center text-[15px] font-[500] gap-2 link cursor-pointer">
                <FaRegHeart className="text-[22px]"/>
                Add to wishlist
              </span>
              <span className="flex items-center text-[15px] font-[500] gap-2 link cursor-pointer">
                <IoGitCompareSharp className="text-[22px]"/>  
                Add to compare
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
