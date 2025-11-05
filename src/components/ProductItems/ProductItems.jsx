import { Link } from "react-router-dom";
import "../ProductItems/style.css";
import Rating from '@mui/material/Rating';
 

const ProductItems=()=>{
    return(
        <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
            <div className="imageWrapper w-[100%] h-[250px] overflow-hidden rounded-md">
                <img src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" alt="" 
                className="w-full  "/>
            </div>

            <div className="info p-3 py-5 bg-[#f1f1f1] ">
                <h6 className="text-[14px]"><Link to="/" className="link transition-all">Soylent Green</Link></h6>
                <h3 className="text-[13px] title mt-1 mb-1 font-[500] text-[rgba(0,0,0,0.9)]"><Link to="/" className="link transition-all">
                Siril Georgette pink color Saree with Blouse piece</Link></h3>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> 

                <div className="flex items-center gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[15px] fon-[500]">$58.00</span>
                    <span className="newPrice text-primary text-[15px] font-[600]">$50.00</span>
                </div>
            </div>
            
        </div>
    )
}

export default ProductItems;