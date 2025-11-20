import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const [isShowPassword,setIsShowPassword]=useState(false)
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h1 className="text-center text-[18px] font-[600] text-black">
            Login to your account
          </h1>

          <form action="" className="w-full">
            <div className="form-group w-full mt-5">
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

              <a href="" className="link cursor-pointer text-[14px] font-[500]">Forget Password ?</a>
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
                <Button className="btn-org btn-lg w-full">Login</Button>

            </div>

            <p className="text-center">Not Registered? <Link className="link text-[14px] font-[600] text-primary" to="/register">Sign Up</Link></p>

            <p className="text-center mt-3 font-[500] mb-3">Or continue with social account</p>
            <Button className="flex gap-3  w-full !bg-[#f1f1f1] btn-lg !text-black"><FcGoogle className="text-[22px]"/>SignIn With Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
