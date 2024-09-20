import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useBlogs"

const Blogs = () => {
  const {loading,blogs}  = useBlogs();
  if(loading) {
    return <div>
      <Appbar
      authorName="P"
      />
      <div className="flex justify-center mt-5">
        <div className="max-w-2xl w-full">
        <div className=" ml-64 mb-10 mt-10 h-4 bg-gray-100 rounded-full  w-64"></div>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
        </div>
    </div>
    </div>
  }
  return (
    <div>
        <Appbar
        authorName="Pankaj"
        />   
        <div className="flex justify-center lg:mr-20"> 
    <div className="max-w-xl">
      <div className="pt-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer mb-2">
      <div className="flex justify-center align-middle text-4xl font-normal mt-5 mb-5">Discover Blogs</div>
      </div>
      <div className="w-full pl-2">
      {blogs.map(blog => <BlogCard
      id={blog.id}
      authorName={blog.author.name}
      title={blog.title}
      content={blog.content}
       publishedDate = "2022-01-01"
      />)}
      </div>
    </div>
    </div>
    </div>
  )
}




export default Blogs