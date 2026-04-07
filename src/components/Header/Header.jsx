import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FaCodeCompare, FaRegHeart, FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoBagCheckSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 10,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
          </div>
        </div>
      </div>

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
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
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