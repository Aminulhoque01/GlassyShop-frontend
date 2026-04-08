import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="w-full">
      <Link to="/">
        <div className="box bannerBox overflow-hidden rounded-lg group">
          <img
            src={props.img}
            alt="adds"
            className="
              w-full
              h-[140px] sm:h-[180px] md:h-[200px] lg:h-[240px]
              object-cover
              transition-all duration-500
              group-hover:scale-105
              group-hover:rotate-1
            "
          />
        </div>
      </Link>
    </div>
  );
};

export default BannerBox;
