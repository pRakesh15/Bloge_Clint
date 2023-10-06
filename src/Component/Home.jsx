import React from 'react'
import "./Home.css"
import Navbar from './Navbar'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Home() {
  const navigate=useNavigate();
  const isAuthanticate=useSelector((state)=>state.isAuthantication)

const createBloge=(e)=>
{
  e.preventDefault();
  if(isAuthanticate)
  {
navigate("/UHome");
  }
  else
  {
    navigate("/Login")
  }

}

  return (
    <div  className='bg-[#ffffff] h-screen'>
    <Navbar/>
      <div className='flex justify-center items-center flex-col space-y-5 mt-40'>
      <h1 className='text-6xl '>Publish your passions, your way</h1>
      <h2 className='text-3xl'>Create a unique and beautiful blog easily.</h2>
      <button
      onClick={createBloge}
       className='bg-black text-white w-48  h-12 text-[18px]   flex items-center justify-center hover:text-red-700'
       >
       Create your blog
       </button>
      </div>
    </div>
  )
}

export default Home
