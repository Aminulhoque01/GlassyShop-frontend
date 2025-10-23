import Button from '@mui/material/Button';
import { IoMdSearch } from "react-icons/io";
import './style.css'
const Search=()=>{
    return(
        <div className="searchBox w-[100%[ h-[50px] bg-[#e5e5e5] rounded-[10px] relative p-2">
            <input type="text" placeholder="Search for Products..." className="w-full h-[35px] p-2 rounded-md focus:outline-none bg-inherit text-[15px]"></input>
            <Button className="!absolute top-[8px] right-[5px] z-50 !w-[35px] !min-w-[35px] h-[35px] !rounded-full !text-black "><IoMdSearch className='text-[#161616] text-[22px]'/></Button>
        </div>
        
    )
}

export default Search