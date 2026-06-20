



import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FaCodeCompare, FaRegHeart, FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { FaRegUserCircle } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoBagCheckSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import Navigation from "./Navigation";
import { fetchDataFromApi } from "../../utils/api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 10,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 5px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const history= useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = ()=>{
    setAnchorEl(null);

     fetchDataFromApi(`/api/user/logout?token=${localStorage.getItem('accessToken')}`,{withCredentials:true}).then((res)=>{
      
      if(res.error===false){
         context.setIsLogin(false);
          localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
      
    })
  }

   

  return (
    <header className="bg-white sticky top-0 z-[1000] shadow-sm">
      {/* Top Strip */}
      <div className="hidden md:block border-b border-gray-200 bg-gray-50">
        <div className="lg:max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-medium text-gray-600">
              Get up to 50% off new season styles, limited time only
            </p>

            <ul className="flex items-center gap-4">
              <li>
                <Link
                  to="/help-center"
                  className="text-[12px] font-medium text-gray-600 hover:text-black"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/order-tracking"
                  className="text-[12px] font-medium text-gray-600 hover:text-black"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            
            {/* Logo */}
            <div className="w-full lg:w-[18%] flex justify-center lg:justify-start">
              <Link to="/">
                <img
                  src="/src/assets/logo/glassy.jpg"
                  alt="logo"
                  className="w-[120px] sm:w-[140px] lg:w-[170px] object-contain"
                />
              </Link>
            </div>

            {/* Search */}
            <div className="w-full lg:flex-1">
              <Search />
            </div>

            {/* Right Actions */}
            <div className="w-full lg:w-auto">
              <ul className="flex items-center justify-center lg:justify-end gap-2 sm:gap-3 flex-wrap">
                
                {/* Auth */}
                {context.isLogin === false ? (
                  <li className="text-[14px] font-medium">
                    <Link to="/login" className="hover:text-black text-gray-700">
                      Login
                    </Link>
                    <span className="mx-2 text-gray-400">|</span>
                    <Link
                      to="/register"
                      className="hover:text-black text-gray-700"
                    >
                      Register
                    </Link>
                  </li>
                ) : (
                  <>
                    <Button
                      className="!text-black !rounded-xl !px-2"
                      onClick={handleClick}
                    >
                      <div className="w-[42px] h-[42px] rounded-full bg-gray-100 flex items-center justify-center">
                        {/* <FaRegUserCircle className="text-[22px]" /> */}
                        <img src={context.userData?.data?.avatar} alt="" className="rounded-full"/>
                      </div>

                      <div className="hidden xl:flex flex-col ml-3 text-left">
                        <h4 className="text-[14px] font-semibold text-gray-700 capitalize">
                          {context.userData?.data?.name}
                        </h4>
                        <span className="text-[12px] text-gray-500">
                          {context.userData?.data?.email}
                        </span>
                      </div>
                    </Button>

                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      transformOrigin={{
                        horizontal: "right",
                        vertical: "top",
                      }}
                      anchorOrigin={{
                        horizontal: "right",
                        vertical: "bottom",
                      }}
                    >
                      <Link to="/my-account" className="block">
                        <MenuItem>
                          <FaRegUserCircle className="mr-2" />
                          My Account
                        </MenuItem>
                      </Link>

                      <Link to="/my-orders" className="block">
                        <MenuItem>
                          <IoBagCheckSharp className="mr-2" />
                          Orders
                        </MenuItem>
                      </Link>

                      <Link to="/my-list" className="block">
                        <MenuItem>
                          <FaHeart className="mr-2" />
                          My Wishlist
                        </MenuItem>
                      </Link>

                      <MenuItem onClick={logout}>
                        <TbLogout2 className="mr-2" />
                        Log Out
                      </MenuItem>
                    </Menu>
                  </>
                )}

                {/* Compare */}
                <li>
                  <Tooltip title="Compare">
                    <IconButton className="!bg-gray-100 hover:!bg-gray-200">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaCodeCompare className="text-[18px]" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                {/* Wishlist */}
                <li>
                  <Tooltip title="Wishlist">
                    <IconButton className="!bg-gray-100 hover:!bg-gray-200">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaRegHeart className="text-[18px]" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                {/* Cart */}
                <li>
                  <Tooltip title="Cart">
                    <IconButton
                      className="!bg-gray-100 hover:!bg-gray-200"
                      onClick={() => context.setOpenCartPanel(true)}
                    >
                      <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  );
};

export default Header;