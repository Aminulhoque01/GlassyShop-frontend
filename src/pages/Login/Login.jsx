import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";
import toast from "react-hot-toast";
import { postData } from "../../utils/api";
 
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();


  
    const onChangeInput=(e)=>{
      const {name, value}=e.target;
      setFormFields(()=>{
        return{
          ...formFields,
           [name]:value
        }
      })
    }

  const validValue = Object.values(formFields).every((el) => el);

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (formFields.email === "") {
        context.openAlertBox("error", "Please enter Email");
        setIsLoading(false);
        return;
      }

      if (formFields.password === "") {
        context.openAlertBox("error", "Please enter Password");
        setIsLoading(false);
        return;
      }

      const res = await postData("/api/user/login", formFields,{withCredentials:true});
      console.log(res)

      if (res?.success) {
        toast.success(res?.message || "login successful");

       
 
        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);

        setFormFields({
          
          email: "",
          password: "",
        });

        context.setIsLogin(true)

        history("/");
      } else {
        toast.error(res?.message || "login failed");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const forgetPassword = () => {
 
    if(formFields.email ===""){
      context.openAlertBox("error","Please enter your email id");
       return false
    }else{
     localStorage.setItem("userEmail", formFields.email);
     localStorage.setItem("actionType", "forgot-password");

      postData("/api/user/forgot-password",{
        email: formFields.email,
      }).then((res)=>{
        if(res?.error==false){
          context.openAlertBox("success", res?.message);
          
          toast.success("Success", "Otp send");
          history("/verify");
        }else{
          context.openAlertBox("error", res?.message)
        }
      })
       
    }
   
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h1 className="text-center text-[18px] font-[600] text-black">
            Login to your account
          </h1>

          <form action="" className="w-full" onSubmit={handelSubmit}>
            <div className="form-group w-full mt-5">
              <div className="form-group w-full mb-5 ">
                <TextField
                  type="email"
                  id="Email"
                  name="email"
                  value={formFields.Email}
                  disabled={isLoading===true ? true:false}
                  label="Email id"
                  variant="outlined"
                  className="w-full  "
              
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group w-full mb-5 relative">
                <TextField
                  type={isShowPassword === false ? "password" : "text"}
                  id="Password"
                  label="Password"
                  name="password"
                  value={formFields.password}
                  disabled={isLoading===true ? true:false}
                  variant="outlined"
                  className="w-full  "
                  
                  onChange={onChangeInput}
                />
                <Button
                  type="button"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]"
                >
                  {isShowPassword === false ? (
                    <IoEyeOutline className="text-[25px] text-black opacity-75" />
                  ) : (
                    <IoEyeOffOutline className="text-[25px] text-black opacity-75" />
                  )}
                </Button>
              </div>

              <a
                 
                className="link cursor-pointer text-[14px] font-[500]"
                onClick={() => forgetPassword()}
              >
                Forget Password ?
              </a>
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
              <Button type="submit" disabled={!validValue} className="btn-org btn-lg w-full flex gap-2">
                  {
                  isLoading===true? <CircularProgress color="inherit" />
                  :"Login"
                  }
                  
              </Button>
              </div>

            <p className="text-center">
              Not Registered?{" "}
              <Link
                className="link text-[14px] font-[600] text-primary"
                to="/register"
              >
                Sign Up
              </Link>
            </p>

            <p className="text-center mt-3 font-[500] mb-3">
              Or continue with social account
            </p>
            <Button className="flex gap-3  w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[22px]" />
              SignIn With Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
