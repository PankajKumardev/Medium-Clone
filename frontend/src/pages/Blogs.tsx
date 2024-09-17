import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

const Blogs = () => {
  return (
    <div>
        <Appbar
        authorName="Pankaj"
        />   
        <div className="flex justify-center"> 
    <div>
   <BlogCard 
   authorName = "Pankaj"
   title = "Blog 1"
   content = "sasfbwfbwkrfnj  e fj knqjekfnwf wnwbfuwnf wfw , jewfowflwnrgknwrgnnwkjnqefjewfowflwnrgknwrgnnwkjnqefjewfowflwnrgknwrgnnwkjnqefjewfowflwnrgknwrgnnwkjnqef fjwnnkejfnwejnfk kvjr"
   publishedDate = "2022-01-01"
   />

<BlogCard 
   authorName = "Pankaj"
   title = "Blog 1"
   content = "sasfbwfbwkrfnj  e fj  wnwbfuwnf wfw , jewfowflwnrgknwrgnnwkjnqknwrgnn"
   publishedDate = "2022-01-01"
   />
    </div>
    </div>
    </div>
  )
}




export default Blogs