import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import {  TextField } from "@mui/material";
import  Button from "@mui/material/Button";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";



const ForgetPassword=()=>{

    const [isShowPassword,setIsShowPassword]=useState(false);
    const [isShowPassword2,setIsShowPassword2]=useState(false);

    const context = useContext(MyContext)
    const history= useNavigate();

    return(
        <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h1 className="text-center text-[18px] font-[600] text-black">
            Confirm your password
          </h1>

          <form action="" className="w-full">
            <div className="form-group w-full mt-5">
              
              <div className="form-group w-full mb-5 relative">
                <TextField
                  type={isShowPassword===false ? "password":"text"}
                  id="Password"
                  label="New Password"
                  variant="outlined"
                  className="w-full  "
                  name="password"
                />
               
                 <Button type="submit" onClick={()=>setIsShowPassword(!isShowPassword)} className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]">
                  {
                    isShowPassword === false ?<IoEyeOutline className="text-[25px] text-black opacity-75" />:
                    <IoEyeOffOutline className="text-[25px] text-black opacity-75" />
                  }
                </Button>
                
              </div>

              <div>
                 <TextField
                  type={isShowPassword2===false ? "password":"text"}
                  id="ForgetPassword"
                  label="Confirm-Password"
                  variant="outlined"
                  className="w-full  "
                  name="password"
                />

                <Button type="submit" onClick={()=>setIsShowPassword2(!isShowPassword2)} className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]">
                  {
                    isShowPassword2 === false ?<IoEyeOutline className="text-[25px] text-black opacity-75" />:
                    <IoEyeOffOutline className="text-[25px] text-black opacity-75" />
                  }
                </Button>
              </div>

              {/* <a href="" className="link cursor-pointer text-[14px] font-[500]" onClick={()=>forgetPassword()}>Forget Password ?</a> */}
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
                <Button className="btn-org btn-lg w-full">Password change</Button>

            </div>

            <p className="text-center">Not Registered? <Link className="link text-[14px] font-[600] text-primary" to="/register">Sign Up</Link></p>

          
          </form>
        </div>
      </div>
    </section>
    )
}

export default ForgetPassword;