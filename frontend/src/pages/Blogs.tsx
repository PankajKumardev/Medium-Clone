import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/useBlogs"

const Blogs = () => {
  const {loading,blogs}  = useBlogs();
  if(loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
        <Appbar
        authorName="Pankaj"
        />   
        <div className="flex justify-center"> 
    <div className="max-w-xl">
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
  )
}




export default Blogs