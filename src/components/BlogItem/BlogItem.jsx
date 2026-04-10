import { IoMdTime } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import shirt from "../../assets/banner/banner1.png";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="imageWrapper w-full overflow-hidden cursor-pointer relative">
        <img
          src={shirt}
          alt="blog"
          className="w-full h-[220px] sm:h-[260px] md:h-[240px] lg:h-[260px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
        />

        {/* Date Badge */}
        <span
          className="flex items-center justify-center text-white absolute bottom-3 right-3 
          z-50 bg-primary rounded-md px-2 py-1 text-[10px] sm:text-[11px] md:text-[12px] 
          font-medium gap-1 shadow-md"
        >
          <IoMdTime className="text-[14px] sm:text-[16px]" />
          7 November 2025
        </span>
      </div>

      {/* Content */}
      <div className="info p-4 sm:p-5">
        <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-black leading-6 mb-2">
          <Link to="/" className="link hover:text-primary transition-colors">
            Nullam ullamcorper ornare molestie
          </Link>
        </h2>

        <p className="text-[13px] sm:text-[14px] text-gray-600 font-normal leading-6 mb-4">
          The standard lorem ipsum passage has been a printer's friend for
          centuries. Like stock photos today, it served as a placeholder for
          actual content. The original text comes from Cicero's...
        </p>

        <Link
          to="/"
          className="link font-medium text-[14px] sm:text-[15px] flex items-center gap-1 text-primary hover:gap-2 transition-all"
        >
          Read More
          <IoIosArrowRoundForward className="text-[20px]" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;