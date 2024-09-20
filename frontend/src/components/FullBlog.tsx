import { Blog } from "../hooks/useBlogs"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

const FullBlog = ({blog} :{ blog :Blog}) => {
  return (
   <div>
    <Appbar 
    authorName="Pankaj"
    />
     <div className="flex justify-center">
     <div className="lg:grid lg:grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
        <div className="col-span-8 gap-4 flex flex-col">
            <h1 className="text-5xl font-bold ">
                {blog.title}
            </h1>
            <div className="text-slate-600 pt-2">
                Posted on 2nd damm shit
            </div>
            <div className="">
                {blog.content}
            </div>
        </div>

        <div className="lg:col-span-4 ml-10 hidden lg:block">
              <div className="text-slate-600 text-lg">Author</div>
             <div className="flex w-full ">
                <div className=" pr-2 flex flex-col justify-center">
                <Avatar 
                name={blog.author.name || "Anonymous"}
                size={"big"}
                />
                </div>
                <div>
                    <div className="text-xl font-semibold">{blog.author.name || "Anonymous"} </div>
                    <div>A random  catcher text for author, nothing to wrorrry fukc</div>
                </div>
             </div>
        </div>
    </div>
     </div>
   </div>
  )
}

export default FullBlog