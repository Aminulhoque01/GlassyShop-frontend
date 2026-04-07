import Button from "@mui/material/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-y">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[65px]">
            
            {/* Mobile Menu */}
            <button
              className="lg:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FiX className="text-[26px]" />
              ) : (
                <FiMenu className="text-[26px]" />
              )}
            </button>

            {/* Category Button */}
            <div
              className="hidden lg:block w-[220px]"
              onClick={() => setIsOpenCategoryPanel(true)}
            >
              <Button className="!text-black !capitalize !font-semibold !py-3 !px-4 !rounded-xl !border !border-gray-200 hover:!bg-gray-100 !w-full !justify-start gap-3">
                <HiOutlineMenuAlt1 className="text-[20px]" />
                Shop Categories
                <LiaAngleDownSolid className="text-[14px] ml-auto" />
              </Button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex items-center gap-2 xl:gap-4">
                {[
                  "Home",
                  "Fashion",
                  "Electronics",
                  "Bags",
                  "Footwear",
                  "Groceries",
                  "Beauty",
                  "Wellness",
                  "Jewellery",
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={`/${item.toLowerCase()}`}>
                      <Button className="!text-gray-700 !font-medium !capitalize hover:!text-black hover:!bg-gray-100 !rounded-lg !px-3">
                        {item}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Text */}
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700">
              <MdOutlineRocketLaunch className="text-[18px]" />
              <span>Free Delivery</span>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Drawer Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[600px] border-t" : "max-h-0"
          }`}
        >
          <div className="bg-white px-4 py-4 shadow-md">
            <ul className="space-y-2">
              {[
                "Home",
                "Fashion",
                "Electronics",
                "Bags",
                "Footwear",
                "Groceries",
                "Beauty",
                "Wellness",
                "Jewellery",
              ].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase()}`}>
                    <Button className="!w-full !justify-start !text-gray-700 !rounded-lg hover:!bg-gray-100">
                      {item}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Category Button */}
            <div className="mt-4">
              <Button
                onClick={() => setIsOpenCategoryPanel(true)}
                className="!w-full !justify-start !rounded-xl !bg-gray-100 !text-black"
              >
                <HiOutlineMenuAlt1 className="mr-2" />
                Shop Categories
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;