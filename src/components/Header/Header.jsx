// import { Link } from "react-router-dom";
// import Search from "../Search/Search";
// import Badge from "@mui/material/Badge";
// import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { FaCodeCompare, FaRegHeart, FaHeart } from "react-icons/fa6";
// import Tooltip from "@mui/material/Tooltip";
 
// import { useContext, useState } from "react";
// import { MyContext } from "../../App";
// import Button from "@mui/material/Button";
// import { FaRegUserCircle } from "react-icons/fa";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { IoBagCheckSharp } from "react-icons/io5";
// import { TbLogout2 } from "react-icons/tb";
// import Navigation from "./Navigation";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: -3,
//     top: 13,
//     border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
//     padding: "0 4px",
//   },
// }));

// const Header = () => {
//   const context = useContext(MyContext);

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="bg-white w-full">
//       {/* Top Strip */}
//       <div className="top-strip py-2 border-b border-gray-200 hidden md:block">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <div className="w-1/2">
//               <p className="text-[12px] font-[500]">
//                 Get up to 50% off new season styles, limited time only
//               </p>
//             </div>

//             <div className="flex items-center justify-end">
//               <ul className="flex items-center gap-3">
//                 <li className="list-none">
//                   <Link
//                     to="/help-center"
//                     className="text-[12px] link font-[500] transition"
//                   >
//                     Help-center
//                   </Link>
//                 </li>
//                 <li className="list-none">
//                   <Link
//                     to="/order-tracking"
//                     className="text-[12px] link font-[500] transition"
//                   >
//                     Order-tracking
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="header py-4 border-b border-gray-200">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
//             {/* Logo */}
//             <div className="w-full lg:w-[20%] flex justify-center lg:justify-start">
//               <Link to="/">
//                 <img
//                   src="/src/assets/logo/glassy.jpg"
//                   alt="logo"
//                   className="w-[120px] md:w-[150px] lg:w-[180px]"
//                 />
//               </Link>
//             </div>

//             {/* Search */}
//             <div className="w-full lg:w-[45%]">
//               <Search />
//             </div>

//             {/* Right Side */}
//             <div className="w-full lg:w-[35%] flex items-center justify-center lg:justify-end">
//               <ul className="flex flex-wrap items-center gap-3 justify-center lg:justify-end w-full">
//                 {context.isLogin === false ? (
//                   <li className="list-none text-center">
//                     <Link
//                       to="/Login"
//                       className="link transition text-[15px] font-[500]"
//                     >
//                       Login
//                     </Link>{" "}
//                     | &nbsp;
//                     <Link
//                       to="/register"
//                       className="link transition text-[15px] font-[500]"
//                     >
//                       Register
//                     </Link>
//                   </li>
//                 ) : (
//                   <>
//                     <Button
//                       className="!text-[#000] myAccountWrapper flex items-center"
//                       onClick={handleClick}
//                     >
//                       <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
//                         <FaRegUserCircle className="text-[20px] !text-black" />
//                       </Button>

//                       <div className="info flex-col hidden sm:flex">
//                         <h4 className="text-[14px] font-[500] text-gray-600 capitalize text-left">
//                           Aminul haque
//                         </h4>
//                         <span className="text-[13px] text-gray-500">
//                           aminulhaque@gmail.com
//                         </span>
//                       </div>
//                     </Button>

//                     <Menu
//                       anchorEl={anchorEl}
//                       id="account-menu"
//                       open={open}
//                       onClose={handleClose}
//                       onClick={handleClose}
//                       transformOrigin={{ horizontal: "right", vertical: "top" }}
//                       anchorOrigin={{
//                         horizontal: "right",
//                         vertical: "bottom",
//                       }}
//                     >
//                       <Link to="/my-account" className="w-full block">
//                         <MenuItem className="flex gap-2">
//                           <FaRegUserCircle />
//                           <span>My Accounts</span>
//                         </MenuItem>
//                       </Link>

//                       <Link to="/my-orders" className="w-full block">
//                         <MenuItem className="flex gap-2">
//                           <IoBagCheckSharp />
//                           <span>Orders</span>
//                         </MenuItem>
//                       </Link>

//                       <Link to="/my-list" className="w-full block">
//                         <MenuItem className="flex gap-2">
//                           <FaHeart />
//                           <span>My List</span>
//                         </MenuItem>
//                       </Link>

//                       <MenuItem className="flex gap-2">
//                         <TbLogout2 />
//                         <span>Log Out</span>
//                       </MenuItem>
//                     </Menu>
//                   </>
//                 )}

//                 {/* Compare */}
//                 <li>
//                   <Tooltip title="compare">
//                     <IconButton>
//                       <StyledBadge badgeContent={4} color="secondary">
//                         <FaCodeCompare />
//                       </StyledBadge>
//                     </IconButton>
//                   </Tooltip>
//                 </li>

//                 {/* Wishlist */}
//                 <li>
//                   <Tooltip title="wishlist">
//                     <IconButton>
//                       <StyledBadge badgeContent={4} color="secondary">
//                         <FaRegHeart />
//                       </StyledBadge>
//                     </IconButton>
//                   </Tooltip>
//                 </li>

//                 {/* Cart */}
//                 <li>
//                   <Tooltip title="cart">
//                     <IconButton
//                       onClick={() => context.setOpenCartPanel(true)}
//                     >
//                       <StyledBadge badgeContent={4} color="secondary">
//                         <ShoppingCartIcon />
//                       </StyledBadge>
//                     </IconButton>
//                   </Tooltip>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Navigation />
//     </div>
//   );
// };

// export default Header;




import { Link } from "react-router-dom";
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                        <FaRegUserCircle className="text-[22px]" />
                      </div>

                      <div className="hidden xl:flex flex-col ml-3 text-left">
                        <h4 className="text-[14px] font-semibold text-gray-700 capitalize">
                          Aminul Haque
                        </h4>
                        <span className="text-[12px] text-gray-500">
                          aminulhaque@gmail.com
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

                      <MenuItem>
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