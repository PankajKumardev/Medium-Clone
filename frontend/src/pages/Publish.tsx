import { useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const  Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar
      authorName="P"
      />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
            <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className="w-full  border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Title" />
              <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={10}
            className=" mt-4 block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your blog here..."
          ></textarea>
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: "Bearer" + " " + localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-700 hover:bg-blue-800">
                    Publish post
                </button>
        </div>
      </div>
    </div>
  )
}
export default Publish