


// import Button from "@mui/material/Button";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import { LiaAngleDownSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";
// import { MdOutlineRocketLaunch } from "react-icons/md";
// import { FiMenu, FiX } from "react-icons/fi";
// import CategoryPanel from "./CategoryPanel";
// import { useState } from "react";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Fashion", path: "/fashion" },
//   { name: "Electronics", path: "/electronics" },
//   { name: "Bags", path: "/bags" },
//   { name: "Footwear", path: "/footwear" },
//   { name: "Groceries", path: "/groceries" },
//   { name: "Beauty", path: "/beauty" },
//   { name: "Wellness", path: "/wellness" },
//   { name: "Jewellery", path: "/jewellery" },
// ];

// const Navigation = () => {
//   const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className="border-y bg-white sticky top-0 z-50 shadow-sm">
//         <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-3">
          
//           {/* Mobile Menu */}
//           <div className="lg:hidden">
//             <Button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="!min-w-0 !p-2"
//             >
//               {mobileMenuOpen ? (
//                 <FiX className="text-[24px] text-black" />
//               ) : (
//                 <FiMenu className="text-[24px] text-black" />
//               )}
//             </Button>
//           </div>

//           {/* Category Button Desktop */}
//           <div
//             className="hidden lg:block lg:w-[220px]"
//             onClick={() => setIsOpenCategoryPanel(true)}
//           >
//         <Button className="!text-black !flex !items-center !justify-start !px-4 !py-3 !rounded-lg !border !border-gray-200 hover:!bg-gray-50 !w-full !whitespace-nowrap">
//             <HiOutlineMenuAlt1 className="text-[18px] mr-2 shrink-0" />
            
//             <span className="font-medium whitespace-nowrap">
//               Shop By Categories
//             </span>

//             <LiaAngleDownSolid className="text-[14px] ml-auto shrink-0" />
//           </Button>
//           </div>

//           {/* Main Navigation */}
//           <div
//             className={`
//               ${
//                 mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//               } fixed lg:static top-0 left-0 h-screen lg:h-auto w-[280px] sm:w-[320px] lg:w-auto
//               bg-white lg:bg-transparent shadow-xl lg:shadow-none
//               transition-all duration-300 ease-in-out
//               z-50 lg:translate-x-0
//               lg:flex-1
//             `}
//           >
//             <div className="p-5 lg:p-0">
//               {/* Mobile Header */}
//               <div className="flex items-center justify-between mb-6 lg:hidden">
//                 <h2 className="text-lg font-semibold">Menu</h2>
//                 <FiX
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-2xl cursor-pointer"
//                 />
//               </div>

//               <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2 lg:gap-3">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="list-none">
//                     <Link
//                       to={item.path}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <Button className="!text-gray-700 hover:!text-black hover:!bg-gray-100 !font-medium !rounded-lg !px-4 !py-2 !w-full lg:!w-auto !justify-start">
//                         {item.name}
//                       </Button>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Delivery Text */}
//          <div className="hidden xl:flex items-center gap-2 text-sm font-medium text-gray-700 whitespace-nowrap shrink-0 min-w-fit">
//           <MdOutlineRocketLaunch className="text-[18px] shrink-0" />
//           <span>Free International delivery</span>
//         </div>
//         </div>

//         {/* Mobile Overlay */}
//         {mobileMenuOpen && (
//           <div
//             className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//             onClick={() => setMobileMenuOpen(false)}
//           />
//         )}
//       </nav>

//       {/* Category Panel */}
//       <CategoryPanel
//         isOpenCategoryPanel={isOpenCategoryPanel}
//         setIsOpenCategoryPanel={setIsOpenCategoryPanel}
//       />
//     </>
//   );
// };

// export default Navigation;




import Button from "@mui/material/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Fashion",
    path: "/fashion",
    subLinks: [
      { name: "Men Fashion", path: "/fashion/men" },
      { name: "Women Fashion", path: "/fashion/women" },
      { name: "Kids Fashion", path: "/fashion/kids" },
    ],
  },
  {
    name: "Electronics",
    path: "/electronics",
    subLinks: [
      { name: "Mobiles", path: "/electronics/mobiles" },
      { name: "Laptops", path: "/electronics/laptops" },
      { name: "Cameras", path: "/electronics/cameras" },
    ],
  },
  {
    name: "Bags",
    path: "/bags",
    subLinks: [
      { name: "Travel Bags", path: "/bags/travel" },
      { name: "School Bags", path: "/bags/school" },
      { name: "Ladies Bags", path: "/bags/ladies" },
    ],
  },
  {
    name: "Footwear",
    path: "/footwear",
    subLinks: [
      { name: "Men Shoes", path: "/footwear/men" },
      { name: "Women Shoes", path: "/footwear/women" },
      { name: "Kids Shoes", path: "/footwear/kids" },
    ],
  },
  {
    name: "Groceries",
    path: "/groceries",
    subLinks: [
      { name: "Rice", path: "/groceries/rice" },
      { name: "Oil", path: "/groceries/oil" },
      { name: "Snacks", path: "/groceries/snacks" },
    ],
  },
  {
    name: "Beauty",
    path: "/beauty",
    subLinks: [
      { name: "Skin Care", path: "/beauty/skincare" },
      { name: "Hair Care", path: "/beauty/haircare" },
      { name: "Makeup", path: "/beauty/makeup" },
    ],
  },
  {
    name: "Wellness",
    path: "/wellness",
    subLinks: [
      { name: "Protein", path: "/wellness/protein" },
      { name: "Vitamins", path: "/wellness/vitamins" },
      { name: "Gym Accessories", path: "/wellness/gym" },
    ],
  },
  {
    name: "Jewellery",
    path: "/jewellery",
    subLinks: [
      { name: "Gold", path: "/jewellery/gold" },
      { name: "Silver", path: "/jewellery/silver" },
      { name: "Diamond", path: "/jewellery/diamond" },
    ],
  },
];

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-y bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-3">
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="!min-w-0 !p-2"
            >
              {mobileMenuOpen ? (
                <FiX className="text-[24px] text-black" />
              ) : (
                <FiMenu className="text-[24px] text-black" />
              )}
            </Button>
          </div>

          {/* Category Button Desktop */}
          <div
            className="hidden lg:block lg:w-[260px]"
            onClick={() => setIsOpenCategoryPanel(true)}
          >
            <Button className="!text-black !flex !items-center !justify-start !px-4 !py-3 !rounded-lg !border !border-gray-200 hover:!bg-gray-50 !w-full !whitespace-nowrap">
              <HiOutlineMenuAlt1 className="text-[18px] mr-2 shrink-0" />
              <span className="font-medium whitespace-nowrap">
                Shop By Categories
              </span>
              <LiaAngleDownSolid className="text-[14px] ml-auto shrink-0" />
            </Button>
          </div>

          {/* Main Navigation */}
          <div
            className={`
              ${
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              } fixed lg:static top-0 left-0 h-screen lg:h-auto w-[280px] sm:w-[320px] lg:w-auto
              bg-white lg:bg-transparent shadow-xl lg:shadow-none
              transition-all duration-300 ease-in-out
              z-50 lg:translate-x-0
              lg:flex-1
            `}
          >
            <div className="p-5 lg:p-0">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-lg font-semibold">Menu</h2>
                <FiX
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl cursor-pointer"
                />
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-1 lg:gap-1">
                {navLinks.map((item, index) => (
                  <li key={index} className="relative group list-none">
                    <Link
                      to={item.path}
                      onClick={() => !item.subLinks && setMobileMenuOpen(false)}
                    >
                      <Button className="!text-gray-700 hover:!text-black hover:!bg-gray-100 !font-medium !rounded-lg !px-4 !py-2 !w-full lg:!w-auto !justify-start">
                        {item.name}
                        {item.subLinks && (
                          <LiaAngleDownSolid className="ml-2 text-[12px]" />
                        )}
                      </Button>
                    </Link>

                    {/* Desktop Dropdown */}
                    {item.subLinks && (
                      <div className="hidden lg:block absolute top-full left-0 min-w-[220px] bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                        <ul className="py-2">
                          {item.subLinks.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Mobile Dropdown */}
                    {item.subLinks && mobileMenuOpen && (
                      <ul className="lg:hidden pl-4 mt-2 space-y-1">
                        {item.subLinks.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-gray-600 py-1"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Delivery Text */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700 whitespace-nowrap shrink-0 min-w-fit">
            <MdOutlineRocketLaunch className="text-[18px] shrink-0" />
            <span>Free International delivery</span>
          </div>
        </div>

        {/* Mobile Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>

      {/* Category Panel */}
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;