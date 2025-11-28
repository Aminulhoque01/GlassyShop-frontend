import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { createContext, useState } from "react";
import ProductZoom from "./components/ProductZoom/ProductZoom";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponents from "./components/ProductDetailsComponents/ProductDetailsComponents";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CartPage from "./pages/Cart/Cart";
import Verify from "./pages/Verify/Verify";

import toast, { Toaster } from 'react-hot-toast'; 

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const [openCartPanel, setOpenCartPanel] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

 

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };



  const openAlertBox=(status, message)=>{
    if(status==="Success"){
      toast.success(message)
    } 
    if(status==="error"){
      toast.error(message)
    } 
    
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleDrawer,
    openCartPanel,
    openAlertBox
    
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/fashion"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/Login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster  />
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
          <div className="flex items-center w-full productDetailsModalContainer relative ">
            <Button
              onClick={handleCloseProductDetailsModal}
              className="!absolute top-[0px] right-[0px] !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !bg-[#f1f1f1]"
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] py-5">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-5 px-8 pr-16 productContent">
              <ProductDetailsComponents />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      
    </>
  );
}

export default App;

export { MyContext };
