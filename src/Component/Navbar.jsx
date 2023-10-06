import React, { useState } from 'react'
import './Nav.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Link, useNavigate } from "react-router-dom";
import { server } from "..";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { authAction } from "../Redux/Store.tsx";

function Navbar() {
  const [showbuttion,setShowbuttion]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
const isAuthanticate=useSelector((state)=>state.isAuthantication)

const logOutHendler=async(e)=>
{
try {
  setShowbuttion(true)
  await axios.get(`${server}/user/logout-user`,
  {
    withCredentials:true,
  });
  localStorage.removeItem('userId')
  dispatch(authAction.logout());
  toast.success("loged out sucessfully",
  {
    position:"top-center",
    theme:"colored"
  })
setShowbuttion(false)
  navigate("/Login");
} catch (error) {
  console.log(error)
  dispatch(authAction.login());
  toast.error("failed to logout",
  {
    position:"top-center",
    theme:"colored"
  })
  setShowbuttion(false)

}
}


  return (
    <div >
      <nav className='bg-transparent' >
      <ul className='flex text-[20px] mx-11 py-4 justify-end space-x-16'>
      <li className='cursor-pointer active:text-green-900'><Link to="/">Home</Link></li>
      {
        isAuthanticate&&<li className='cursor-pointer active:text-green-900'><Link to="/Mybloges">MyBlog</Link></li>

      }
      <li className='cursor-pointer active:text-green-900'><Link to="/Bloge">Blogs</Link></li>
{
  isAuthanticate?<li className='cursor-pointer active:text-green-900'><button onClick={logOutHendler}>LogOut</button></li>:<li className='cursor-pointer active:text-green-900'><Link to="/Login">Login</Link></li>

}
      </ul>
      
      </nav>
      
    </div>
  )
}

export default Navbar
