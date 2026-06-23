 
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadImage } from "../../utils/api";

const AccountSidebar = () => {
  const [previews, setPreviews] = useState([]);
  
  const [uploading, setUploading] = useState(false);
  const context = useContext(MyContext);

  useEffect(()=>{
    const userAvatar=[];
   if(context?.userData?.data?.avatar !=="" && context?.userData?.data?.avatar !== undefined){
     userAvatar.push(context?.userData?.data?.avatar);
     setPreviews(userAvatar)
   }
  },[context?.userData])

   
  let selectedImages = [];

  const formdata=new FormData();

  const onChangeFile = async (e,) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);

      for (var i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file= files[i];
          selectedImages.push(file);
          formdata.append(`avatar`, file)

          uploadImage("/api/user/user_avatar", formdata).then((res)=>{
            console.log(res)
            setUploading(false)

            let avatar=[];
            avatar.push(res?.data?.avatar);
            setPreviews(avatar)
          })
         
         
        }
      }
    } catch (error) {
       context.openAlertBox("error","please select a valid JPG , PNG or webp image file")
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div
          className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center 
        justify-center bg-gray-200"
        >
            {
            previews?.length === 0 &&
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs86eV39_U63X9x2vieNVSpUPSB5t1TIYh_eNIAoOoIA&s=10"    
            className="w-full h-full object-cover"/>
          }
          {uploading === true ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
             {
              previews?.length !==0 && previews?.map((img,index)=>{
                  
                return(
                 
                   <img
                    src={img}
                    key={index}
                    alt=""
                    className="w-full h-full object-cover"
                />
                )
              })
             }
            </>
          )}

        

          <div
            className="overly w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.7)] absolute flex items-center 
                                 justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100"
          >
            <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/*"
              onChange={(e) => onChangeFile(e, "/api/user/user_avatar")}
              name="avatar"
            />
          </div>
        </div>

        <h3 className="text-[16px] font-[600]">{context?.userData?.data?.name}</h3>
        <h6 className="text-[13px] font-[400]">{context?.userData?.data?.email}</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full ">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left  !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
              <FaRegUserCircle className="text-[#000] text-[17px]" /> My profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full ">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button
              className="w-full !text-left  !px-5 !justify-start rounded-none flex items-center gap-3
                                 !capitalize !text-[rgba(0,0,0,0.7)]"
            >
              <FaHeart className="text-[#000] text-[17px]" />
              My-List
            </Button>
          </NavLink>
        </li>

        <li className="w-full ">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left  !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
              <IoBagCheckSharp className="text-[#000] text-[17px]" />
              My-order
            </Button>
          </NavLink>
        </li>

        <li className="w-full ">
          <NavLink to="/logout" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left  !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
              <TbLogout2 className="text-[#000] text-[17px]" /> Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
