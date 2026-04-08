import { Link } from "react-router-dom";
import "../BannerBoxV2/style.css";
import product8 from "../../assets/banner/banner4.jpg"

const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
      <img
        src={product8}
        alt="banner"
        className="
          w-full
          h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px]
          object-cover
          transition-all duration-300
          group-hover:scale-105
        "
      />

      <div
        className={`
          info absolute top-0 h-full z-50
          p-4 sm:p-5 md:p-6
          ${props.info === "left" ? "left-0" : "right-0"}
          w-[80%] sm:w-[70%] lg:w-[65%]
          flex items-start justify-center flex-col gap-2
          ${props.info === "left" ? "" : "pl-8 sm:pl-12"}
        `}
      >
        <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-snug">
          Samsung Gear VR Camera
        </h2>

        <span className="text-[18px] sm:text-[20px] md:text-[24px] text-primary font-[600] w-full">
          $129.00
        </span>

        <div className="w-full">
          <Link
            to="/"
            className="text-[14px] sm:text-[15px] md:text-[16px] font-[600] link"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;