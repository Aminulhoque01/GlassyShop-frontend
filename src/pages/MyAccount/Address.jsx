import { Button, CircularProgress, Radio, TextField } from "@mui/material";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import {  useState } from "react";
import { MyContext } from "../../App";
 
import { PhoneInput } from "react-international-phone";

 
 
import Dialog from '@mui/material/Dialog';
 
import DialogTitle from '@mui/material/DialogTitle'

const Address = () => {
 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

              <form action="" className="form mt-8" onSubmit="">
             
                 

                <br />

                <div
                  className="flex items-center justify-center p-5 border border-dashed border-[rgba(0,0,0,0.2) 
              bg-[#f1faff]] cursor-pointer hover:bg-[#e7f3f9]"
                >
                  <Button
                    className="btn-blue   !text-black "
                    onClick={handleClickOpen
                    }
                  >
                    Add address
                  </Button>
                </div>

                {/* <div className="flex gap-2 flex-col mt-4">
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
                </div> */}

                
              </form>
            </div>
          </div>
        </div>
      </section>


      <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
       
    </Dialog>
    </div>
  );
};

export default Address;
