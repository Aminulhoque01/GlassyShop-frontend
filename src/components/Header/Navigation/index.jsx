import  Button  from "@mui/material/Button"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Navigation=()=>{
    return(
        <nav className="py-2">
            <div className="container flex items-center justify-end gap-8">
                <div className="col_1 w-[20%]">
                    <Button className="!text-black gap-2 w-full"><HiOutlineMenuAlt1 className="text-[18px]"/>Shop By Categories <LiaAngleDownSolid className="text-[14px] ml-auto font-bold"/></Button>
                </div>

                <div className="col_2 w-[60%]">
                    <ul className="flex items-center gap-4">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Home</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/fashion" className="link transition text-[14px] font-[500]">Fashion</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/electronics" className="link transition text-[14px] font-[500]">Electronics</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/bags" className="link transition text-[14px] font-[500]">Bags</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/footwear" className="link transition text-[14px] font-[500]">Footwear</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/groceries" className="link transition text-[14px] font-[500]">Groceries</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/beauty" className="link transition text-[14px] font-[500]">Beauty</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/wellness" className="link transition text-[14px] font-[500]">Wellness</Link>
                        </li>
                        
                        <li className="list-none">
                            <Link to="/jewellery" className="link transition text-[14px] font-[500]">Jewellery</Link>
                        </li>
                        
                    </ul>
                </div>

                <div className="col_3 w-[20%]">
                    <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0"><MdOutlineRocketLaunch className="text-[18px]"/> Free International delivery</p>
                </div>
                 
                
            </div>
        </nav>
    )
}

export default Navigation