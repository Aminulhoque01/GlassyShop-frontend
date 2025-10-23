import { Link } from "react-router-dom"
import Search from "../Search/Search"


const Header = () =>{
  return (
    <div>
        <div className="top-strip py-2 border-t-[1xp] border-gray-250 border-b-[1px]  ">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className="text-[12px] font-[500]">Get up to 50% off new season styles, limited time only</p>
                    </div>

                    <div className="col2 flex items-center justify-end">
                        <ul className="flex items-center gap-3">
                            <li className="list-none">
                                <Link to ="/help-center " className="text-[12px] link font-[500] transition">Help-center{""}</Link>
                            </li>
                             <li className="list-none">
                                <Link to ="/order-tracking " className="text-[12px] link font-[500] transition">Order-tracking{""}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="header py-3">
            <div className="container flex items-center justify-between">
                <div className="col1 w-[20%]">
                    <Link to={"/"}><img src="/src/assets/logo/glassy.jpg" ></img></Link>
                </div>
                <div className="col2 w-[50%] ml-20">
                    <Search/>
                </div>
                <div className="col3 w-[30%]"></div>
            </div>
        </div>
    </div>
  )
}

export default Header