import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/useBlogs"
import FullBlog from "../components/FullBlog";
import { Appbar } from "../components/Appbar";
import BlogSkeleton2 from "../components/BlogSkeleton2";

const Blog = () => {
  const { id } = useParams();
  const{loading, blog} = useBlog({
    id : id || ""
  })
  if(loading) {
    return <div>
      <Appbar
      authorName="P"
      />
     <div> 
      <BlogSkeleton2/>
      <BlogSkeleton2/>
      <BlogSkeleton2/>      
    </div>
    </div>
  }
   return (
    <div>
      <FullBlog
      blog={blog}
      />
    </div>
  )
}

export default Blog  