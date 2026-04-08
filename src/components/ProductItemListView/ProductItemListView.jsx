// import { Link } from "react-router-dom";
// import "../ProductItems/style.css";
// import Rating from "@mui/material/Rating";
// import Button from "@mui/material/Button";
// import { FaRegHeart } from "react-icons/fa";
// import { LuGitCompareArrows } from "react-icons/lu";
// import { MdZoomOutMap } from "react-icons/md";
// import Tooltip from "@mui/material/Tooltip";
// import { IoMdCart } from "react-icons/io";
// import "./style.css"
// import { useContext } from "react";
// import { MyContext } from "../../App";
// import shart from "../../assets/product/shart1.jpg"


// const ProductItemListView = () => {
//   const context = useContext(MyContext)
//   return (
//     <div className="productItem shadow-lg rounded-md overflow-hidden border-1
//      border-[rgba(0,0,0,0.1)] flex items-center">
//       <div className="group imageWrapper w-[25%]  rounded-md relative">
//         <Link to="/">
//           <div className="img h-[220px] overflow-hidden">
//             <img
//               src={shart}
//               alt=""
//               className="w-full rounded-md "
//             />
//             <img
//               src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
//               alt=""
//               className="w-full h-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
//             />
//           </div>
//         </Link>
//         <span
//           className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary
//                 text-white rounded-md p-1 text-[12px] font-[500]"
//         >
//           10%
//         </span>

//         <div
//           className="actions absolute top-[-200px] right-[5px] z-50 flex items-end gap-2 flex-col w-[50px]
//          transition-all duration-500 group-hover:top-[15px] opacity-0 group-hover:opacity-100"
//         >
//           <Tooltip title="favorite" placement="left-start">
//             {" "}
//             <Button
//               className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white
//                      hover:!bg-primary  group"
//             >
//               <FaRegHeart className="text-[18px] !text-black hover:!text-white" />
//             </Button>
//           </Tooltip>
//           <Tooltip title="compare" placement="left-start">
//             <Button
//               className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white
//                      hover:!bg-primary hover:!text-white group"
//             >
//               <LuGitCompareArrows className="text-[18px] !text-black hover:!text-white " />
//             </Button>
//           </Tooltip>
//           <Tooltip title="view details" placement="left-start">
//             <Button onClick={()=>context.setOpenProductDetailsModal(true)}
//               className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white
//                      hover:!bg-primary hover:!text-white group"
//             >
//               <MdZoomOutMap className="text-[18px] !text-black hover:!text-white " />
//             </Button>
//           </Tooltip>
//         </div>
//       </div>

//       <div className="info p-3 py-5 px-8  w-[75%]">
//         <h6 className="text-[15px]">
//           <Link to="/" className="link transition-all">
//             Soylent Green
//           </Link>
//         </h6>
//         <h3 className="text-[18px] title mt-2 mb-3 font-[500] text-[rgba(0,0,0,0.9)]">
//           <Link to="/" className="link transition-all">
//             Siril Georgette pink color Saree with Blouse piece
//           </Link>
//         </h3>
//         <p className="text-[14px] mb-3">We denounce with righteous indignation and dislike men who are so beguild and demoralized by the charms of pleasure of the moment, so blinded by desire that they cannot</p>
//         <Rating
//           name="half-rating-read"
//           defaultValue={2.5}
//           precision={0.5}
//           readOnly
//         />

//         <div className="flex items-center gap-4">
//           <span className="oldPrice line-through text-gray-500 text-[15px] fon-[500]">
//             $58.00
//           </span>
//           <span className="newPrice text-primary text-[15px] font-[600]">
//             $50.00
//           </span>
//         </div>

//         <div className="mt-3">
//           <Button className="btn-org flex gap-2"><IoMdCart className="text-[20px]"/>Ad to Cart</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItemListView;




import { Link } from "react-router-dom";
import "../ProductItems/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { IoMdCart } from "react-icons/io";
import "./style.css";
import { useContext } from "react";
import { MyContext } from "../../App";
import shart from "../../assets/product/shart1.jpg";

const ProductItemListView = () => {
  const context = useContext(MyContext);

  return (
    <div
      className="
        productItem shadow-lg rounded-md overflow-hidden border
        border-[rgba(0,0,0,0.1)]
        flex flex-col sm:flex-row items-start sm:items-center
      "
    >
      {/* Image Section */}
      <div className="group imageWrapper w-full sm:w-[35%] md:w-[30%] lg:w-[25%] rounded-md relative">
        <Link to="/">
          <div className="img h-[220px] sm:h-[240px] md:h-[250px] overflow-hidden relative">
            <img
              src={shart}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
              alt=""
              className="w-full h-full object-cover transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>

        <span
          className="
            discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary
            text-white rounded-md px-2 py-1 text-[11px] sm:text-[12px] font-[500]
          "
        >
          10%
        </span>

        {/* Actions */}
        <div
          className="
            actions absolute top-[15px] sm:top-[-200px] right-[5px] z-50
            flex items-end gap-2 flex-col w-[50px]
            transition-all duration-500
            opacity-100 sm:opacity-0
            sm:group-hover:top-[15px]
            sm:group-hover:opacity-100
          "
        >
          <Tooltip title="favorite" placement="left-start">
            <Button
              className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-primary"
            >
              <FaRegHeart className="text-[18px]" />
            </Button>
          </Tooltip>

          <Tooltip title="compare" placement="left-start">
            <Button
              className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-primary"
            >
              <LuGitCompareArrows className="text-[18px]" />
            </Button>
          </Tooltip>

          <Tooltip title="view details" placement="left-start">
            <Button
              onClick={() => context.setOpenProductDetailsModal(true)}
              className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-primary"
            >
              <MdZoomOutMap className="text-[18px]" />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Info Section */}
      <div
        className="
          info
          p-4 sm:p-5 md:p-6 lg:px-8
          w-full sm:w-[65%] md:w-[70%] lg:w-[75%]
        "
      >
        <h6 className="text-[14px] sm:text-[15px]">
          <Link to="/" className="link transition-all">
            Soylent Green
          </Link>
        </h6>

        <h3
          className="
            text-[16px] sm:text-[18px] md:text-[20px]
            title mt-2 mb-3 font-[500]
            text-[rgba(0,0,0,0.9)]
          "
        >
          <Link to="/" className="link transition-all">
            Siril Georgette pink color Saree with Blouse piece
          </Link>
        </h3>

        <p className="text-[13px] sm:text-[14px] mb-3 leading-6 text-gray-600">
          We denounce with righteous indignation and dislike men who are so
          beguild and demoralized by the charms of pleasure of the moment, so
          blinded by desire that they cannot
        </p>

        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
          size="small"
        />

        <div className="flex items-center gap-4 mt-2">
          <span className="oldPrice line-through text-gray-500 text-[14px] sm:text-[15px]">
            $58.00
          </span>
          <span className="newPrice text-primary text-[15px] sm:text-[16px] font-[600]">
            $50.00
          </span>
        </div>

        <div className="mt-4">
          <Button className="btn-org flex gap-2 !text-[13px] sm:!text-[14px]">
            <IoMdCart className="text-[18px] sm:text-[20px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemListView;