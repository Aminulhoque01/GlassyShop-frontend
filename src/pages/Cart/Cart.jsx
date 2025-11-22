import { Link } from "react-router-dom";
import image1 from "../../assets/product/shart1.jpg";
import { IoCloseSharp } from "react-icons/io5";

const CartPage = () => {
  return (
    <section className="section py-5">
      <div className="container w-[80%] max-w-[80%] flex">
        <div className="leftPart w-[75%]">
          <h2>Your Cart</h2>
          <p className="mt-0">
            There are <span className="text-bold text-primary"> 2 </span>{" "}
            products in your Cart
          </p>
          <div className="shadow-md rounded-md   bg-white">
            <div className="cartItem w-full p-2 flex items-center gap-4">
              <div className="img w-[10%] rounded-md overflow-hidden group">
                <Link to="/productDetails/:id ">
                  <img
                    src={image1}
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[90%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[15px] right-[15px] text-[20px] link transition-all"/>
                <span className="text-[16px]">Sangria</span>
                <h3 className="text-[18px] font-[600]">
                  <Link to="/productDetails/:id" className="link">
                    A-Line Kurti with Sharara & Dupatta
                  </Link>
                </h3>

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
      </div>
    </section>
  );
};

export default CartPage;
