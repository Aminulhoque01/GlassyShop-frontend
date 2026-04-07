import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

   

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

  return (
    <div>
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

          {/* electronics */}

          <li className="list-none flex justify-center relative flex-col">
            <Link to="/" className="w-full">
              {" "}
              <Button className="w-full !text-left !justify-start !py-2 front-bold !text-[rgba(0,0,0,0.8)]">
                Electronics
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
                  <ul className="submenu  w-full pl-3 mb-1 ">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                      >
                        Mobiles
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                      >
                        Laptops
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]"
                      >
                        Smart watch
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryCollapse;
