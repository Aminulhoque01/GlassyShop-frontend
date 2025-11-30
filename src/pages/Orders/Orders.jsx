import { Button } from "@mui/material";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import { IoIosArrowDown } from "react-icons/io";
import Badge from "../../components/Badge/Badge";

const Orders = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md   bg-white pb-10">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0">
                There are <span className="text-bold text-primary"> 2 </span>{" "}
                products in Orders
              </p>
            </div>

            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
              <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-[600]">
                      <Button className="!w-[35px] !h-[35px] !min-h-[35px] !rounded-full !bg-[#f1f1f1]"><IoIosArrowDown className="text-[16px] text-[rgba(0,0,0,0.7)]"/></Button>
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600] whitespace-nowrap">
                      Order Id
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600] whitespace-nowrap">
                     Payment Id
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600]">
                     Products
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600]">
                     Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600] whitespace-nowrap">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600]">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600]">
                      Pincode
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600] whitespace-nowrap">
                      Total Amount
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600]">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600] whitespace-nowrap">
                      User Id
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600] whitespace-nowrap">
                      Order Status
                    </th>
                    <th scope="col" className="px-6 py-3 font-[600]">
                     Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-primary border-b border-default font-[500]">
                     
                    <td className="px-6 py-4">&nbsp;</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4">54644</td>
                    <td className="px-6 py-4"><Badge status="pending"/></td>
                    <td className="px-6 py-4">54644</td>
                     
                  </tr>
                
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
