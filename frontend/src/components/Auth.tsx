import { SignupInput } from "@pankajkumardev/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config.tsx";
const Auth = ({type}: {type : "signup" | "signin"} ) => {
    const [postInput,setPostInput] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInput);
            const jwt = type === "signin" ? response.data.jwt : response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blog");
        } catch(error) {
            {type === "signup"? setError("Error while signing up") : setError("Error while signing in")}
        }
    }   
  return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="px-10">
            <div className="text-3xl font-bold ">
            {type === "signin" ? "Unlock Your Account" : "Create Your Profile"}     
            </div> 
            <div className="ml-2 mt-1 text-slate-600">
            {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline text-slate-700" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Signin"}
                        </Link>
                 </div>
            </div>
          <div className="pt-8">
         {type === "signup" ?  <LabelledInput 
           type="text"
           label="Name"
           placeholder="Pankaj"
           onChange={(e)=> {
            setPostInput({
                ...postInput,
                name: e.target.value
            })
           }}
           /> : null}

        <LabelledInput 
           type="email"
           label="Email"
           placeholder="Pankaj@gmail.com"
           onChange={(e)=> {
            setPostInput({
                ...postInput,
                email: e.target.value
            })
           }}
           />

        <LabelledInput 
           type="password"
           label="Password"
           placeholder="123456"
           onChange={(e)=> {
            setPostInput({
                ...postInput,
                password : e.target.value
            })
           }}
           />
            <button  type="button" onClick={sendRequest} className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
            {error && <div className="text-red-500 text-sm mt-2 flex justify-center font-medium">{error}</div>}
           </div>
          </div>
        </div>
    </div>
  )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder={placeholder} required />
    </div>
}
export default Auth