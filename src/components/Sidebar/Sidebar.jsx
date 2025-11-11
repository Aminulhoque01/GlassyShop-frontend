import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { UnmountClosed } from "react-collapse";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import "./style.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] =
    useState(true);
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
              <IoIosArrowUp className="text-[#000] !text-[35px] pt-1  " />
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
            onClick={() =>
              setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)
            }
          >
            {isOpenAvailabilityFilter === true ? (
              <IoIosArrowUp className="text-[#000] !text-[35px] pt-1  " />
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
              <IoIosArrowUp className="text-[#000] !text-[35px] pt-1  " />
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

       <div className="box  mt-4">
            <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5 ">
            Filter By Price
            </h3>

            <RangeSlider/>

            <div className="flex pt-4 pb-2 priceRange ">
                <span className="  text-[13px]">
                    From:<strong className="text-dark">Rs:{100}</strong>
                </span>
                <span className="ml-auto text-[13px]">
                    From:<strong className="text-dark">Rs:{500}</strong>
                </span>
            </div>
       </div>

       <div className="box  mt-4">
            <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5 ">
            Filter by Rating
            </h3>

           <div className="w-full">
             <Rating name="size-small" defaultValue={5} size="small"   />
           </div>
           <div className="w-full">
             <Rating name="size-small" defaultValue={4} size="small"   />
           </div>
           <div className="w-full">
             <Rating name="size-small" defaultValue={3} size="small"   />
           </div>
           <div className="w-full">
             <Rating name="size-small" defaultValue={2} size="small"   />
           </div>
           <div className="w-full">
             <Rating name="size-small" defaultValue={1} size="small"   />
           </div>
             
            
       </div>
    </aside>
  );
};

export default Sidebar;
