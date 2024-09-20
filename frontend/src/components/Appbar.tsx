import { Link ,useNavigate} from "react-router-dom"
import { Avatar } from "./BlogCard"

interface authorName  {
    authorName :string;
}
export const Appbar = ({authorName}:authorName) =>{
    const navigate = useNavigate();
    return(
        <div className="border-b flex justify-between px-10 py-3 ">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-semibold text-xl ">
                Medium
        </Link>
        
        <div className="flex gap-2">
            <button
             onClick={() => {
                localStorage.removeItem("token");
                navigate("/signin");
              }}
              className="relative mt-1 h-9 w-28 overflow-hidden font-medium text-gray-600 bg-gray-200 border border-gray-100 rounded-lg shadow-inner group" >
              Signout  
            </button>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
 
            <Avatar size="big" name={authorName[0]} />
            {/* <Avatar size="big" name="P" /> */}
        </div>
    </div>
    )
}