import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { UnmountClosed } from "react-collapse";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import "./style.css";
import Button from "@mui/material/Button";
import { useState } from "react";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] = useState(true);
  const [isOpenSizeFilter, setIsSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-8 ">
      <div className="box mb-5">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5 ">
          Shop by Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? (
              <IoIosArrowUp className="text-[#000] !text-[35px] pt-1  "/>
            ) : (
              <IoIosArrowDown className="text-[#000] !text-[35px] pt-1  " />
            )}
          </Button>
        </h3>
        <UnmountClosed isOpened={isOpenCategoryFilter}>
          <div className="scroll px-5 relative -left-[13px]">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Fashion" />
              <FormControlLabel control={<Checkbox />} label="Electronics" />
              <FormControlLabel control={<Checkbox />} label="Bags" />
              <FormControlLabel control={<Checkbox />} label="Footwear" />
              <FormControlLabel control={<Checkbox />} label="Groceries" />
              <FormControlLabel control={<Checkbox />} label="Beauty" />
              <FormControlLabel control={<Checkbox />} label="Wellness" />
              <FormControlLabel control={<Checkbox />} label="Jewellery" />
            </FormGroup>
          </div>
        </UnmountClosed>
      </div>

      <div className="box mb-4 ">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5 ">
         Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            onClick={() => setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)}
          >
            {isOpenAvailabilityFilter === true ? (
              <IoIosArrowUp className="text-[#000] !text-[35px] pt-1  "/>
            ) : (
              <IoIosArrowDown className="text-[#000] !text-[35px] pt-1  " />
            )}
          </Button>
        </h3>
        <UnmountClosed isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-5 relative -left-[13px]">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Available (17)" />
              <FormControlLabel control={<Checkbox />} label="In Stock  (17)" />
              <FormControlLabel control={<Checkbox />} label="Not Available" />
              
            </FormGroup>
          </div>
        </UnmountClosed>
      </div>

      <div className="box  ">
        <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5 ">
         Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            onClick={() => setIsSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? (
              <IoIosArrowUp className="text-[#000] !text-[35px] pt-1  "/>
            ) : (
              <IoIosArrowDown className="text-[#000] !text-[35px] pt-1  " />
            )}
          </Button>
        </h3>
        <UnmountClosed isOpened={isOpenSizeFilter}>
          <div className="scroll px-5 relative -left-[13px]">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Small (17)" />
              <FormControlLabel control={<Checkbox />} label="Medium  (17)" />
              <FormControlLabel control={<Checkbox />} label="Large (10)" />
              <FormControlLabel control={<Checkbox />} label="Xl (15)" />
              <FormControlLabel control={<Checkbox />} label="XXl (25)" />
              
            </FormGroup>
          </div>
        </UnmountClosed>
      </div>
    </aside>
  );
};

export default Sidebar;
