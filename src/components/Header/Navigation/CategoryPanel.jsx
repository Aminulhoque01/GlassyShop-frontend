import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategoryPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="text-[16px] font-[500] p-2 flex items-center justify-between">
        Shop By Category
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex justify-center relative flex-col">
            <Link to="/" className="w-full">
              {" "}
              <Button className="w-full !text-left !justify-start !py-2 front-bold !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="inner_submenu  w-full pl-3  ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !py-2 front-bold !text-[rgba(0,0,0,0.8)] font-bold">
                      Apparel
                    </Button>
                    {innerSubmenuIndex === 0 ? (
                      <FaRegPlusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                      />
                    ) : (
                      <FaRegSquareMinus
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                      />
                    )}
                  </Link>


                  {innerSubmenuIndex === 0 && (
                    <ul className="submenu  w-full pl-3 mb-1 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          Cape T-shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          leather watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>



          <li className="list-none flex justify-center relative flex-col">
            <Link to="/" className="w-full">
              {" "}
              <Button className="w-full !text-left !justify-start !py-2 front-bold !text-[rgba(0,0,0,0.8)]">
                Outerwear
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FaRegPlusSquare
                className=" absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="inner_submenu  w-full pl-3  ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !py-2 front-bold !text-[rgba(0,0,0,0.8)] font-bold">
                      Apparel
                    </Button>
                    {innerSubmenuIndex === 1 ? (
                      <FaRegPlusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    ) : (
                      <FaRegSquareMinus
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                      />
                    )}
                  </Link>


                  {innerSubmenuIndex === 1 && (
                    <ul className="submenu  w-full pl-3 mb-1 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          Cape T-shirt
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          leather watch
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
