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
  const [activeTabs, setActiveTabs] = useState(0);
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
            <h1 className="text-[22px] font-[600]">
              Boys Shirt Chikankari Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </h1>

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
                <FaRegHeart className="text-[22px]" />
                Add to wishlist
              </span>
              <span className="flex items-center text-[15px] font-[500] gap-2 link cursor-pointer">
                <IoGitCompareSharp className="text-[22px]" />
                Add to compare
              </span>
            </div>
          </div>
        </div>

        <div className="container mt-8">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] font-[500] cursor-pointer ${
                activeTabs === 0 && "text-primary"
              }`}
              onClick={() => setActiveTabs(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] font-[500] cursor-pointer ${
                activeTabs === 1 && "text-primary"
              }`}
              onClick={() => setActiveTabs(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] font-[500] cursor-pointer ${
                activeTabs === 2 && "text-primary"
              }`}
              onClick={() => setActiveTabs(2)}
            >
              Reviews (5)
            </span>
          </div>
          {activeTabs === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae facilis aliquid culpa, obcaecati laboriosam aperiam
                accusantium voluptatem nam praesentium doloremque repellat
                reprehenderit nisi, nesciunt, aspernatur necessitatibus earum
                sint sit dolorem!
              </p>

              <h4 className="text-[16px] font-[600]">Lightweight Design</h4>

              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quas quaerat cupiditate mollitia architecto aperiam quae dolorem
                ad eligendi, fugiat, accusantium dicta quia.
              </p>

              <h4 className="text-[16px] font-[600] mt-5">
                Free Shipping & Return
              </h4>

              <p className="mt-5">
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in Us
              </p>

              <h4 className="text-[16px] font-[600] mt-5">
                Money Back Guarantee
              </h4>
              <p className="mt-5">
                We guarantee our products and you could get back all of yours
                money anytime you want in 30 days
              </p>

              <h4 className="text-[16px] font-[600] mt-5">Online Support</h4>

              <p className="mt-5">
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange
              </p>
            </div>
          )}

          {activeTabs === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                  <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                      <th scope="col" class="px-6 py-3 font-[600]">
                        stand Up
                      </th>
                      <th scope="col" class="px-6 py-3 font-[600]">
                        Folded (w/o wheels)
                      </th>
                      <th scope="col" class="px-6 py-3 font-[600]">
                        Folded (w/ wheels)
                      </th>
                      <th scope="col" class="px-6 py-3 font-[600]">
                        Door Pass Through
                      </th>
                      <th scope="col" class="px-6 py-3 font-[600]">
                        Frame
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-neutral-primary border-b border-default font-[500]">
                      <td class="px-6 py-4">
                        35"L x 24"W x 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 24.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-default font-[500]">
                      <td class="px-6 py-4">
                        35"L x 24"W x 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 24.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-default font-[500]">
                      <td class="px-6 py-4">
                        35"L x 24"W x 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 24.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-default font-[500]">
                      <td class="px-6 py-4">
                        35"L x 24"W x 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 24.5"w x 16.5"H</td>
                      <td class="px-6 py-4">32.5"L x 18.5"w x 16.5"H</td>
                      <td class="px-6 py-4">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTabs === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[15px] font-[600]">
                  Customer Question & Answer
                </h2>

                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
                  <div className="review mb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center  gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%]">
                        <h4 className="text-[16px] font-[600]">Aminul haque</h4>
                        <h5 className="text-[13px] font-[600]">2025-11-17</h5>
                        <p className="mt-0 mb-0">Nice product</p>
                      </div>
                    </div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4}
                      
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
