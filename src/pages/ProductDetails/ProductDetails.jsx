import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";

const ProductDetails = () => {
  return (
    <>
      <div className="py-5 pb-0">
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
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-4">
          <div className="productZoomContainer w-[30%]">
            <ProductZoom />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
