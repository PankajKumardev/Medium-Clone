import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
interface authorName  {
    authorName :string;
}
export const Appbar = ({authorName}:authorName) =>{
    return(
        <div className="border-b flex justify-between px-10 py-3 ">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-semibold text-xl ">
                Medium
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>

            <Avatar size={"big"} name={authorName[0]} />
        </div>
    </div>
    )
}