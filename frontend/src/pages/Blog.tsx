import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/useBlogs"
import { Appbar } from "../components/Appbar";
import BlogSkeleton2 from "../components/BlogSkeleton2";
import { FullBlog } from "../components/FullBlog";

 const Blog = () => {
  const { id } = useParams();
  const{loading, blog } = useBlog({
    id : id || ""
  });
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
      {blog ? (
        <FullBlog blog={blog} />
      ) : (
        <div>
          <Appbar authorName="P" />
          <div>Blog not found</div>
        </div>
      )}
    </div>
  );
};

export default Blog