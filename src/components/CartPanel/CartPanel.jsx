import { Link } from "react-router-dom";
import image1 from "../../assets/product/shart1.jpg"


const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-5 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-2 border-[rgba(0,0,0,0.1)] p-2">
          <div className="img w-[30%] border-2 border-[rgba(0,0,0,0.1)] p-1">
            <img src={image1} alt="" className="w-full" />
          </div>

          <div className="info w-[70%]">
            <h4 className="text-[16px] font-[500]">
              <Link to="/product/:id" className="link">
                A-Line kurti with Sharara & Dupatta
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
