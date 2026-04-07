import { IoMdTime } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Link } from "react-router-dom";

const BlogItem=()=>{
    return(
        <div className="blogItem group  ">
            <div className="imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
                <img src="https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg" 
                alt="blog" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1 " />

               <span className="flex items-center justify-center text-white absolute bottom-[15px] 
               right-[15px] z-50 bg-primary rounded-md p-1 tex-[11px] font-[500] gap-1">
                <IoMdTime className="text-[16px]"/> 7 November 2025
               </span>

            </div>

            <div className="info py-4">
                <h2 className="text-[16px] font-[600] text-black">
                    <Link to="/" className="link">Nullam ullamcorper ornare molestie</Link>
                </h2>
                <p className="text-[12px] font-[500] mb-4 ">The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content. The original text comes from Cicero's
                     ...</p>

                     <Link to="/" className="link font-[500] text-[14px] flex items-center">Read More
                      <IoIosArrowRoundForward className="text-[18px]"/>
                    </Link>

            </div>
        </div>
    )
};

export default BlogItem;