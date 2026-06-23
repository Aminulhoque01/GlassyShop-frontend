import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import toast from "react-hot-toast";
import { aditData } from "../../utils/api";
import CircularProgress from '@mui/material/CircularProgress';

const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const context = useContext(MyContext);
  const history = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      history("/");
    }
  }, [context?.isLogin]);

  useEffect(() => {
    if (
      context?.userData?.data?._id !== "" &&
      context?.userData?.data?._id !== undefined
    ) {
      setUserId(context?.userData?.data?._id);
    }
  }, [context?.userData]);

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

      if (formFields.name === "") {
        context.openAlertBox("error", "Please enter name");
        setIsLoading(false);
        return;
      }

      if (formFields.email === "") {
        context.openAlertBox("error", "Please enter email");
        setIsLoading(false);
        return;
      }
      if (formFields.mobile === "") {
        context.openAlertBox("error", "Please enter mobile number");
        setIsLoading(false);
        return;
      }

      const res = await aditData(`/api/user/${userId}`, formFields, {
        withCredentials: true,
      });
      console.log(res);

      if (res?.success) {
        toast.success(res?.message || "login successful");

        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);

        setFormFields({
          email: "",
          password: "",
        });

        context.setIsLogin(true);

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

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />

            <form action="" className="mt-5" onSubmit={handelSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%] ">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="name"
                    value={formFields.name}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="w-[50%] ">
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="email"
                    value={formFields.Email}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <div className="w-[50%] ">
                  <TextField
                    label="phone number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="mobile"
                    value={formFields.mobile}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <br />

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  disabled={!validValue}
                  className="btn-org  w-[300px]"
                >
                  {isLoading === true ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "save"
                  )}
                </Button>
                <Button className="btn-org btn-border   w-[100px]">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
