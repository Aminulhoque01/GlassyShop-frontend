import Sidebar from "../../components/Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItems from "../../components/ProductItems/ProductItems";
import Button from "@mui/material/Button";

const ProductListing = () => {
  return (
    <section className="py-5">
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

      <div className="bg-white p-3 mt-4">
        <div className="container flex gap-5">
          <div className="sidebarWrapper w-[20%] h-[100%] bg-white  ">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%]">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
                <div className="col1 flex items-center gap-3">
                  <Button></Button>
                </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
              <ProductItems/>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
