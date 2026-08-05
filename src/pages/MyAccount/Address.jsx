import { Button, TextField } from "@mui/material";
import { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const Address = () => {
  const [isLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    status: true,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formFields,
      mobile: phone,
    });

    handleClose();
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

              <div
                className="flex items-center justify-center p-5 border border-dashed border-gray-300 bg-[#f1faff] cursor-pointer hover:bg-[#e7f3f9]"
              >
                <Button variant="contained" onClick={handleClickOpen}>
                  Add Address
                </Button>
              </div>
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
              label="Address Line"
              name="address"
              value={formFields.address}
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
              label="Pincode"
              name="pincode"
              value={formFields.pincode}
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
                onChange={(value) => {
                  setPhone(value);

                  setFormFields((prev) => ({
                    ...prev,
                    mobile: value,
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

            <Button type="submit" variant="contained">
              Save Address
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Address;