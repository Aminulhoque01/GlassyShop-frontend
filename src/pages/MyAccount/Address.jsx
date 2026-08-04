import { Button, CircularProgress, Radio, TextField } from "@mui/material";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import toast from "react-hot-toast";
import { fetchDataFromApi } from "../../utils/api";
import { PhoneInput } from "react-international-phone";

const Address = () => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState("");
    const [adAddress, setAdAddress] = useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [changePassword, setChangePassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const context = useContext(MyContext);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });

    setChangePassword(() => {
      return {
        ...changePassword,
        [name]: value,
      };
    });
  };

    const validValue = Object.values(formFields).every((el) => el);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    if (event.target.checked === true) {
      // aditData(`/api/address/${event.target.value}`,{selected:true})
    } else {
      // aditData(`/api/address/${event.target.value}`,{selected:false})
    }
  };

  useEffect(() => {
    if (
      context?.userData?.data?._id !== "" &&
      context?.userData?.data?._id !== undefined
    ) {
      fetchDataFromApi(
        `/api/address/get-address?userId=${context?.userData?.data?._id}`,
      ).then((res) => {
        setAdAddress(res);
        context.setAdAddress(res);
      });
      setUserId(context?.userData?.data?._id);
      setFormFields({
        name: context?.userData?.data?.name,
        email: context?.userData?.data?.email,
        mobile: context?.userData?.data?.mobile,
      });
      const ph = `"context?.userData?.data?.mobile"`;
      setPhone(ph);

      setChangePassword({
        email: context?.userData?.data?.email,
      });
    }
  }, [context?.userData]);


  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      // setIsLoading(true);

      if (formFields.name === "") {
        context.openAlertBox("error", "Please enter name");
        // setIsLoading(false);
        return;
      }

      if (formFields.email === "") {
        context.openAlertBox("error", "Please enter email");
        // setIsLoading(false);
        return;
      }
      if (formFields.mobile === "") {
        context.openAlertBox("error", "Please enter mobile number");
        // setIsLoading(false);
        return;
      }

      // const res = await aditData(`/api/user/${userId}`, formFields, {
      //   withCredentials: true,
      // }).then((res) => {
      //   if (res?.data?.message === "User Updated successfully") {
      //     toast.success(res?.data?.message);
      //   }
      // });
      // console.log(res);
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="py-10 w-full">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSidebar />
          </div>

          <div className="col2 w-[50%]">
            <div className="card bg-white p-5 shadow-md rounded-md mb-5">
              <div className="flex items-center pb-0">
                <h2 className="pb-0">Address</h2>
              </div>
              <hr />

              <form action="" className="form mt-8" onSubmit={handelSubmit}>
                <div className="flex items-center gap-5">
                  <div className="w-[50%] ">
                    <TextField
                      type="text"
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
                      value={formFields.email}
                      disabled={true}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 mt-5">
                  <div className="w-[50%] ">
                    <PhoneInput
                      defaultCountry="bd"
                      value={phone}
                      disabled={isLoading === true ? true : false}
                      onChange={(phone) => {
                        setPhone(phone);
                        setFormFields({
                          mobile: phone,
                        });
                      }}
                    />
                  </div>
                </div>

                <br />

                <div
                  className="flex items-center justify-center p-5 border border-dashed border-[rgba(0,0,0,0.2) 
              bg-[#f1faff]] cursor-pointer hover:bg-[#e7f3f9]"
                >
                  <Button
                    className="btn-blue   !text-white "
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Ad New Address",
                      })
                    }
                  >
                    Add address
                  </Button>
                </div>

                <div className="flex gap-2 flex-col mt-4">
                  {adAddress?.data?.length > 0 &&
                    adAddress.data.map((address, index) => (
                      <label
                        key={index}
                        className="addressBox border border-dashed border-[rgba(0,0,0,0.2) 
              bg-[#f1faff]] p-3 rounded-md bg-[#f1f1f1] cursor-pointer w-full flex  items-center justify-center"
                      >
                        <Radio
                          name="address"
                          checked={selectedValue === address?._id}
                          value={address?._id}
                          onChange={handleChange}
                        />
                        <span className="text-[12px]">
                          {address?.address_line1 +
                            " " +
                            address?.city +
                            " " +
                            address?.country +
                            " " +
                            address?.pinCode +
                            " " +
                            address?.state}
                        </span>
                      </label>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={!validValue}
                    className="btn-blue  w-[300px]"
                  >
                    {isLoading === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "save"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Address;
