import React, { useState } from "react";
import rakesh from "../Image/login.jpg";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { server } from "..";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { authAction } from "../Redux/Store.tsx";

function Login() {
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [showbuttion,setShowbuttion]=useState(false);
const dispatch=useDispatch();
const navigate=useNavigate();

  const loginUser=async(e)=>
  {
    try {
      e.preventDefault();
      setShowbuttion(true)
      const {data}=await axios.post(`${server}/user/login-user`,{
        email,
        password
      },
      {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true,

      });
     localStorage.setItem("userId",data.user._id)
     console.log(data.user)
      dispatch(authAction.login());
      toast.success(data.message,{
        position: "top-center",
        theme: "colored",
      })
      setShowbuttion(false)
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message,{
        position: "top-center",
        theme: "colored",
      })
      setShowbuttion(false)
    }
  }
  return (
    <>
      <div className="bg-[#dccdcd] h-screen">
        <Navbar />
        <div className=" flex flex-col items-center ">
          <h1 className="font-Cinzel text-4xl border-b-2 border-black p-4 px-10 mt-10">
            Login
          </h1>
          <div className="flex border-2  mt-6 bg-white rounded-2xl shadow-xl shadow-yellow-200">
            <div>
              <img
                src={rakesh}
                alt="Login"
                className="h-96 rounded-2xl -ml-5"
              />
            </div>
            <div className="flex flex-col p-5 -ml-10">
              <h1 className="text-xl pl-16 mt-10 pb-3 border-b-2 border-black">
                Members Login
              </h1>
              <form onSubmit={loginUser} className="flex flex-col">
              <input
                className="mt-8 w-72 h-9 p-1 border-2 outline-none border-yellow-500 rounded"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={e=>setEmail(e.target.value)}
                required
              />
              <input
                className="mt-2 w-72 h-9 p-1 border-2 outline-none border-yellow-500 rounded"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <button
               className="bg-yellow-400 h-8 w-20 text-xl rounded mt-5 ml-24 flex items-center justify-center"
              
               disabled={showbuttion}
               >
                Login
              </button>
              </form>
              <p className="ml-[48px] mt-6 text-xl">
                New Here ?{" "}
                <Link
                  to="/Register"
                  className="text-green-500 border-b-2 border-yellow-500"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
