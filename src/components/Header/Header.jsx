import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
<<<<<<< HEAD
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FaCodeCompare, FaRegHeart, FaHeart } from "react-icons/fa6";
=======

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
<<<<<<< HEAD
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoBagCheckSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
=======
import { FaRegUserCircle } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
<<<<<<< HEAD
    top: 10,
=======
    top: 13,
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);
<<<<<<< HEAD
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

=======

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
<<<<<<< HEAD
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top strip */}
      <div className="hidden md:block py-2 border-b text-sm">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between">
          <p className="font-medium">
            Get up to 50% off new season styles
          </p>
          <div className="flex gap-4">
            <Link to="/help-center" className="hover:text-blue-500">
              Help Center
            </Link>
            <Link to="/order-tracking" className="hover:text-blue-500">
              Order Tracking
            </Link>
=======
    <div className="bg-white">
      <div className="top-strip py-2 border-t-[1xp] border-gray-250 border-b-[1px]  ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center "
                    className="text-[12px] link font-[500] transition"
                  >
                    Help-center{""}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking "
                    className="text-[12px] link font-[500] transition"
                  >
                    Order-tracking{""}
                  </Link>
                </li>
              </ul>
            </div>
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Main header */}
      <div className="border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="w-[120px] md:w-[160px]">
              <Link to="/">
                <img
                  src="/src/assets/logo/glassy.jpg"
                  alt="logo"
                  className="w-full object-contain"
                />
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="hidden lg:block flex-1 max-w-[500px]">
              <Search />
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-2 md:gap-3">
              
              {/* Mobile Search Toggle */}
              <button
                className="lg:hidden"
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              >
                <FiMenu className="text-[22px]" />
              </button>

              {/* Login/User */}
              {context.isLogin ? (
                <>
                  <Button
                    className="!text-black !min-w-0"
                    onClick={handleClick}
                  >
                    <FaRegUserCircle className="text-[24px]" />
=======
      <div className="header py-4 border-b-[1px] border-gray-250 ">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to={"/"}>
              <img src="/src/assets/logo/glassy.jpg"></img>
            </Link>
          </div>
          <div className="col2 w-[45%] ml-20">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center gap-3 justify-end w-full">
              {context.isLogin === false ? (
                <li className="list-none">
                  <Link
                    to="/Login"
                    className="link transition text-[15px] font-[500]"
                  >
                    Login
                  </Link>{" "}
                  | &nbsp;{" "}
                  <Link
                    to="/register"
                    className="link transition text-[15px] font-[500]"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="!text-[#000] myAccountWrapper flex items-center"
                    onClick={handleClick}
                  >
                    <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full cursor-pointer  !bg-[#f1f1f1]">
                      <FaRegUserCircle className="text-[20px] !text-black" />
                    </Button>

                    <div className="info flex flex-col">
                      <h4 className="!leading-3 text-[14px] font-[500] text-[rgba(0,0,0,0.6)] mb-0 capitalize text-left justify-start">
                        Aminul haque
                      </h4>
                      <span className="text-[13px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left justify-start">
                        aminulhaque@gmail.com
                      </span>
                    </div>
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
<<<<<<< HEAD
                    open={open}
                    onClose={handleClose}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account">
                      <MenuItem onClick={handleClose}>
                        <FaRegUserCircle className="mr-2" /> My Account
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders">
                      <MenuItem onClick={handleClose}>
                        <IoBagCheckSharp className="mr-2" /> Orders
                      </MenuItem>
                    </Link>
                    <Link to="/my-list">
                      <MenuItem onClick={handleClose}>
                        <FaHeart className="mr-2" /> Wishlist
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>
                      <TbLogout2 className="mr-2" /> Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div className="hidden md:flex gap-2 text-sm font-medium">
                  <Link to="/login">Login</Link>
                  <span>|</span>
                  <Link to="/register">Register</Link>
                </div>
              )}

              {/* Compare */}
              <Tooltip title="Compare">
                <IconButton>
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaCodeCompare />
                  </StyledBadge>
                </IconButton>
              </Tooltip>

              {/* Wishlist */}
              <Tooltip title="Wishlist">
                <IconButton>
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
              </Tooltip>

              {/* Cart */}
              <Tooltip title="Cart">
                <IconButton onClick={() => context.setOpenCartPanel(true)}>
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </div>
          </div>

          {/* Mobile Search */}
          {mobileSearchOpen && (
            <div className="mt-3 lg:hidden">
              <Search />
            </div>
          )}
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
=======
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaRegUserCircle className="text-[18px]" />{" "}
                        <span className="text-[14px]">My Accounts</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoBagCheckSharp className="text-[18px]" />
                        <span className="text-[14px]"> Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-list" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaHeart className="text-[18px]" />{" "}
                        <span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleClose}
                      className="flex gap-2 !py-2"
                    >
                      <TbLogout2 className="text-[18px]" />{" "}
                      <span className="text-[14px]">Log Out</span>
                    </MenuItem>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaCodeCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="cart">
                  <IconButton
                    aria-label="cart"
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

      <Navigation></Navigation>
    </div>
  );
};

export default Header;
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
