import  Button from "@mui/material/Button";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";


const QtyBox =()=>{
    return(
        <div className="qtyBox  flex items-center relative">
            <input type="number" className="w-full h-full p-2 pl-5 text-[15px] focus:outline-none border-2 
            border-[rgba(0,0,0,0.2)] rounded-md" defaultValue={1}/>
           <div className="flex items-center flex-col justify-between h-[40x] absolute top-0 right-0 z-50 !border-l-1 !border-[#000]">
             <Button className="!min-w-[20px] !h-[20px] !text-[#000] !rounded-none"><FaCaretUp /></Button>
            <Button className="!min-w-[20px] !h-[20px] !text-[#000] !rounded-none"><FaCaretDown /></Button>
           </div>
        </div>
    )
}

export default QtyBox;