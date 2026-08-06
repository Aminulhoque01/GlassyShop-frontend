import { Button, Radio, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import toast from "react-hot-toast";
import { MyContext } from "../../App";
import { aditData, fetchDataFromApi, postData } from "../../utils/api";

const Address = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const context = useContext(MyContext);

  const [selectedValue, setSelectedValue] = useState("");

  const [formFields, setFormFields] = useState({
    address_line1: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    mobile: "",
    status: "",
    userId: "",
    selected: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    if (event.target.checked === true) {
      aditData(`/api/address/${event.target.value}`, { selected: true });
    } else {
      aditData(`/api/address/${event.target.value}`, { selected: false });
    }
  };

  useEffect(() => {
    if (context?.userData?.data?._id) {
      const mobile = String(context?.userData?.data?.mobile || "");

     
      fetchAddress();
  

      setPhone(mobile);

      setFormFields((prev) => ({
        ...prev,
        userId: context?.userData?.data?._id,
        mobile,
      }));
    }
  }, [context?.userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (!formFields.address_line1)
        return context.openAlertBox("error", "Enter Address");

      if (!formFields.city) return context.openAlertBox("error", "Enter City");

      if (!formFields.state)
        return context.openAlertBox("error", "Enter State");

      if (!formFields.pinCode)
        return context.openAlertBox("error", "Enter Pin Code");

      if (!formFields.country)
        return context.openAlertBox("error", "Enter Country");

      if (!formFields.mobile)
        return context.openAlertBox("error", "Enter Mobile");

      const res = await postData("/api/address/add", formFields, {
        withCredentials: true,
      });

      console.log(res);

      if (res?.success) {
        toast.success(res.message);

        setFormFields({
          address_line1: "",
          city: "",
          state: "",
          pinCode: "",
          country: "",
          mobile: "",
          status: "",
          userId: context?.userData?.data?._id,
        });

        setPhone("");

        fetchDataFromApi(
          `/api/address/get-address?userId=${context?.userData?.data?._id}`,
        ).then((res) => {
          context.setAdAddress(res);
        });
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAddress = async () => {
    try {
      const res = await fetchDataFromApi(
        `/api/address/get-address?userId=${context?.userData?.data?._id}`
      );

      context.setAdAddress(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="py-10">
        <div className="container flex gap-5">
          <div className="w-[25%]">
            <AccountSidebar />
          </div>

          <div className="w-[75%]">
            <div className="card bg-white p-5 shadow-md rounded-md">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Address</h2>
              </div>

              <hr className="my-4" />

              <div className="flex items-center justify-center p-5 border border-dashed border-gray-300 bg-[#f1faff] cursor-pointer hover:bg-[#e7f3f9]">
                <Button
                  className="!bg-[#ff5252]"
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  Add Address
                </Button>
              </div>
            </div>
            <hr />
            <br />

            <div className="mt-5 space-y-3">
              {context?.adAddress?.data?.length > 0 ? (
                context.adAddress.data.map((address) => (
                  <div
                    key={address._id}
                    className="border rounded-md p-4 shadow-sm bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p>
                          <strong>Address:</strong> {address.address_line1}
                        </p>

                        <p>
                          {address.city}, {address.state}
                        </p>

                        <p>
                          {address.country} - {address.pinCode}
                        </p>

                        <p>{address.mobile}</p>

                        <p>
                          Status :
                          <span
                            className={`ml-2 ${
                              address.status ? "text-green-600" : "text-red-500"
                            }`}
                          >
                            {address.status ? "Published" : "Unpublished"}
                          </span>
                        </p>
                      </div>

                      <Radio
                        checked={selectedValue === address._id}
                        value={address._id}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No Address Found</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add Address</DialogTitle>

        <form onSubmit={handleSubmit} className="p-5">
          <div className="mb-3">
            <TextField
              fullWidth
              size="small"
              label="address_line1"
              name="address_line1"
              value={formFields.address_line1}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-3 mb-3">
            <TextField
              fullWidth
              size="small"
              label="City"
              name="city"
              value={formFields.city}
              onChange={handleInputChange}
            />

            <TextField
              fullWidth
              size="small"
              label="State"
              name="state"
              value={formFields.state}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-3 mb-3">
            <TextField
              fullWidth
              size="small"
              label="pinCode"
              name="pinCode"
              value={formFields.pinCode}
              onChange={handleInputChange}
            />

            <TextField
              fullWidth
              size="small"
              label="Country"
              name="country"
              value={formFields.country}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-3 mb-3">
            <div className="w-full">
              <PhoneInput
                defaultCountry="bd"
                value={phone}
                disabled={isLoading}
                onChange={(phone) => {
                  setPhone(phone);

                  setFormFields((prev) => ({
                    ...prev,
                    mobile: phone,
                  }));
                }}
              />
            </div>

            <FormControl fullWidth size="small">
              <Select
                value={formFields.status}
                onChange={(e) =>
                  setFormFields((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }
              >
                <MenuItem value={true}>Published</MenuItem>
                <MenuItem value={false}>Unpublished</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>

            <Button type="submit" className="!bg-[#ff5252]" variant="contained">
              Save Address
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Address;
