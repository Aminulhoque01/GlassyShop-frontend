import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createContext, useState } from "react";
import ProductZoom from "./components/ProductZoom/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";



const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(true);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");

  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {};

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button onClick={handleCloseProductDetailsModal} className="!absolute top-[0px] right-[0px] !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]"><IoCloseSharp /></Button>
            <div className="col1 w-[50%]">
              <ProductZoom />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
