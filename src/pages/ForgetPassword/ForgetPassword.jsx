import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { postData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";

const ForgetPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    email:localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const validValue = Object.values(formFields).every((el) => el);

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (formFields.newPassword === "") {
        context.openAlertBox("error", "Please enter new password");
        setIsLoading(false);
        return;
      }

      if (formFields.confirmPassword === "") {
        context.openAlertBox("error", "Please enter confirm Password");
        setIsLoading(false);
        return;
      }

      if (formFields.newPassword !== formFields.confirmPassword) {
        context.openAlertBox("error", " Password and Confirm not match");
        setIsLoading(false);
        return;
      }
      
      postData(`/api/user/reset-password`, formFields).then((res)=>{
        console.log(res)
        
        if (res?.success === true) {
          context.openAlertBox("success", res?.message);

          localStorage.removeItem("userEmail");
          localStorage.removeItem("actionType");

          history("/login")
        } else {
          context.openAlertBox("error", res?.message);
        }

      })
     
      
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h1 className="text-center text-[18px] font-[600] text-black">
            Confirm your password
          </h1>

          <form action="" className="w-full" onSubmit={handelSubmit}>
            <div className="form-group w-full mt-5">
              <div className="form-group w-full mb-5 relative">
                <TextField
                  type={isShowPassword === false ? "password" : "text"}
                  id="Password"
                  label="New Password"
                  variant="outlined"
                  className="w-full  "
                  value={formFields.newPassword}
                  disabled={isLoading === true ? true : false}
                  name="newPassword"
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

              <div className="relative">
                <TextField
                  type={isShowPassword2 ? "text" : "password"}
                  id="ForgetPassword"
                  label="Confirm Password"
                  variant="outlined"
                  className="w-full"
                  value={formFields.confirmPassword}
                  disabled={isLoading}
                  name="confirmPassword"
                  onChange={onChangeInput}
                />

                <Button
                  type="button"
                  onClick={() => setIsShowPassword2(!isShowPassword2)}
                  className="!absolute top-[10px] right-[10px] !z-[9999] !w-[35px] !h-[35px] !min-w-[35px]"
                >
                  {isShowPassword2 ? (
                    <IoEyeOffOutline className="text-[25px] text-black opacity-75" />
                  ) : (
                    <IoEyeOutline className="text-[25px] text-black opacity-75" />
                  )}
                </Button>
              </div>

              {/* <a href="" className="link cursor-pointer text-[14px] font-[500]" onClick={()=>forgetPassword()}>Forget Password ?</a> */}
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={!validValue}
                className="btn-org btn-lg w-full flex gap-2"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Change password"
                )}
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
