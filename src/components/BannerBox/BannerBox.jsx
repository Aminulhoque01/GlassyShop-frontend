import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div>
      <Link to="/">
        <div className="box bannerBox overflow-hidden rounded-lg group">
          <img src={props.img} alt="adds" className="w-full h-[200px] group-hover:scale-105 group-hover:rotate-2 transition-all" />
        </div>
      </Link>
    </div>
  );
};

export default BannerBox;
