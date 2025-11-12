import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <section className="py-5 pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/" className="link">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="container">
        <div className="productZoomContainer">

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
