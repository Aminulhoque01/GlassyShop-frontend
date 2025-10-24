import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";

import { IoCloseSharp } from "react-icons/io5";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategoryPanel(newOpen);
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
          <li className="list-none flex justify-center relative">
            <Button className="w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]">
              Fashion
            </Button>
            <FaRegPlusSquare className="absolute top-[10px] right-[15px]" />

            <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3 pr-3">
              <li className="list-none relative">
                <Button className="w-full !text-left !justify-start !py-2 !text-[rgba(0,0,0,0.8)]">
                  Fashion
                </Button>
                <FaRegPlusSquare className="absolute top-[10px] right-[15px]" />
              </li>
            </ul>
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
