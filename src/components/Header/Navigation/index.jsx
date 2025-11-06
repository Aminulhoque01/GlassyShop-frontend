import Button from "@mui/material/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  return (
    <>
      <nav  >
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]" onClick={openCategoryPanel}>
            <Button className="!text-black gap-2 w-full">
              <HiOutlineMenuAlt1 className="text-[18px]" />
              Shop By Categories{" "}
              <LiaAngleDownSolid className="text-[14px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-1 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !py-4">Home</Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/fashion"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none  w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>{" "}
                      </Link>
                    </li>
                    <li className="list-none  w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none  w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none  w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none relative">
                <Link
                  to="/electronics"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !py-4 ">
                    Electronics
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none  w-full relative">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none ">
                          Mobile
                        </Button>
                      </Link>
                      <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none  w-full">
                            <Link to="/" className="w-full">
                              {" "}
                              <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                                Apple
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              {" "}
                              <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                                Iphone
                              </Button>{" "}
                            </Link>
                          </li>
                          <li className="list-none  w-full">
                            <Link to="/" className="w-full">
                              {" "}
                              <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                                Vivo
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none  w-full">
                            <Link to="/" className="w-full">
                              {" "}
                              <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                                Samsug
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Laptops
                        </Button>{" "}
                      </Link>
                    </li>
                    <li className="list-none  w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Smart Watch
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/bags"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500]">Bags</Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/footwear"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500]">
                    Footwear
                  </Button>
                </Link>
                 <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none  w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Men footwear
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        {" "}
                        <Button className="!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none">
                          Women footwear
                        </Button>{" "}
                      </Link>
                    </li>
                   
                   
                     
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/groceries"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/beauty"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/wellness"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500]">
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/jewellery"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500]">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <MdOutlineRocketLaunch className="text-[18px]" /> Free
              International delivery
            </p>
          </div>
        </div>
      </nav>

      {/* // CategoryPanel components */}
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;
