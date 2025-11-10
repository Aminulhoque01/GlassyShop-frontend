import Sidebar from "../../components/Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ProductListing = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link"
          >
            Fashion
          </Link>
         
        </Breadcrumbs>
      </div>

      <div className="bg-white p-3 mt-4">
        <div className="container flex gap-3">
        <div className="sidebarWrapper w-[20%] h-[100%] bg-white  ">
          <Sidebar />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProductListing;
