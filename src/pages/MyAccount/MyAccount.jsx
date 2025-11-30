import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

const MyAccount=()=>{
    return(
        <section className="py-10 w-full">
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <div className="card bg-white shadow-md rounded-md  ">
                        <div className="w-full p-5 flex items-center justify-center flex-col">
                            <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjclDv0e9IVQdcKL5CgI8DITEgglEavaKqww&s"
                                 alt="" className="w-full h-full object-cover"/>

                                 <div className="overly w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.7)] absolute flex items-center 
                                 justify-center cursor-pointer">
                                    <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
                                    <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"/>
                                 </div>
                            </div>

                            <h3 className="text-[16px] font-[600]">Jhon Doe</h3>
                        </div>

                        <ul className="list-none pb-5">
                            <li className="w-full ">
                                <Button className="w-full !text-left !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
                                    <FaRegUserCircle className="text-[#000] text-[17px]"/> My profile</Button>

                            </li>
                            
                            <li className="w-full ">
                                <Button className="w-full !text-left !px-5 !justify-start rounded-none flex items-center gap-3
                                 !capitalize !text-[rgba(0,0,0,0.7)]"><FaHeart className="text-[#000] text-[17px]"/> 
                                 My-List</Button>

                            </li>
                            
                            <li className="w-full ">
                                <Button className="w-full !text-left !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
                                    <IoBagCheckSharp className="text-[#000] text-[17px]"/>My-order</Button>

                            </li>
                            
                            <li className="w-full ">
                                <Button className="w-full !text-left !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
                                    <TbLogout2 className="text-[#000] text-[17px]"/> Logout</Button>

                            </li>
                            

                        </ul>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default MyAccount;