import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white shadow-md rounded-md  ">
            <div className="w-full p-5 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjclDv0e9IVQdcKL5CgI8DITEgglEavaKqww&s"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div
                  className="overly w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.7)] absolute flex items-center 
                                 justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100"
                >
                  <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              <h3 className="text-[16px] font-[600]">Jhon Doe</h3>
              <h6 className="text-[13px] font-[400]">jhonDoe@gmail.com</h6>
            </div>

            <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
              <li className="w-full ">
                <NavLink
                  to="/my-account"
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !text-left  !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
                    <FaRegUserCircle className="text-[#000] text-[17px]" /> My
                    profile
                  </Button>
                </NavLink>
              </li>

              <li className="w-full ">
                <NavLink
                  to="/my-list"
                  exact={true}
                  activeClassName="isActive"
                >
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
                <NavLink
                  to="/my-orders"
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !text-left  !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
                    <IoBagCheckSharp className="text-[#000] text-[17px]" />
                    My-order
                  </Button>
                </NavLink>
              </li>

              <li className="w-full ">
                <NavLink
                  to="/logout"
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !text-left  !px-5 !justify-start rounded-none flex items-center gap-3 !capitalize !text-[rgba(0,0,0,0.7)]">
                    <TbLogout2 className="text-[#000] text-[17px]" /> Logout
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="col2 w-[50%]">
            <div className="card bg-white p-5 shadow-md rounded-md">
                <h2 className="pb-3">My Profile</h2>
                <hr />

                <form action=""className="mt-5">
                    <div className="flex items-center gap-5">
                        <div className="w-[50%] ">
                            <TextField   label="Full Name" variant="outlined" 
                            size="small" className="w-full"/>

                        </div>
                        <div className="w-[50%] ">
                            <TextField   label="Email" variant="outlined" 
                            size="small" className="w-full"/>

                        </div>
                        

                    </div>

                    <div className="flex items-center gap-5 mt-5">
                        <div className="w-[50%] ">
                            <TextField   label="phone number" variant="outlined" 
                            size="small" className="w-full"/>

                        </div>
                        
                        

                    </div>

                    <br />

                    <div className="flex items-center gap-4">
                        <Button className="btn-org btn-lg w-[100px]">Save</Button>
                        <Button className="btn-org btn-border btn-lg w-[100px]">Cancel</Button>
                    </div>
                </form>
            </div>

        </div>

      </div>
    </section>
  );
};

export default MyAccount;
