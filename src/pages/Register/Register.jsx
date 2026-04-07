import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const [isShowPassword,setIsShowPassword]=useState(false)
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h1 className="text-center text-[18px] font-[600] text-black">
            Register with new a account
          </h1>

          <form action="" className="w-full">
            <div className="form-group w-full mt-5">
              <div className="form-group w-full mb-5 ">
                <TextField
                  type="Full-Name"
                  id="fullName"
                  label="fullName"
                  variant="outlined"
                  className="w-full  "
                />
              </div>
              <div className="form-group w-full mb-5 ">
                <TextField
                  type="email"
                  id="Email"
                  label="Email id"
                  variant="outlined"
                  className="w-full  "
                />
              </div>
              <div className="form-group w-full mb-5 relative">
                <TextField
                  type={isShowPassword===false ? "password":"text"}
                  id="Password"
                  label="Password"
                  variant="outlined"
                  className="w-full  "
                />
                <Button onClick={()=>setIsShowPassword(!isShowPassword)} className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]">
                  {
                    isShowPassword === false ?<IoEyeOutline className="text-[25px] text-black opacity-75" />:
                    <IoEyeOffOutline className="text-[25px] text-black opacity-75" />
                  }
                </Button>
              </div>

             
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
                <Button className="btn-org btn-lg w-full">Register</Button>

            </div>

            <p className="text-center">Are you Registered? <Link className="link text-[14px] font-[600] text-primary" to="/Login">Sign In</Link></p>

            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
