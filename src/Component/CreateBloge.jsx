import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from "react-router-dom";
import { server } from "..";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateBloge() {
const [titel,setTitel]=useState("");
const [description,setDescription]=useState("");
const [image,setImage]=useState("");
const [showbuttion,setShowbuttion]=useState(false);
const navigate=useNavigate();

  const createHendler=async(e)=>
  {
   
    try {
      e.preventDefault();
      setShowbuttion(true);
      const {data}=await axios.post(`${server}/blogges/creat_blogg`,
      {
        titel,
        description,
        image
      },
      {
        headers:{
          "Content-Type":"application/json"
                },
                withCredentials:true
      });
      toast.success(data.message,{
        position: "top-center",
        theme: "colored",
      })
      navigate("/Bloge")
      setShowbuttion(false)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message,{
        position: "top-center",
        theme: "colored",
      })
    }
  }
  return (
    <div className=''>
    <Navbar/>
      <form onSubmit={createHendler}>
      <div className='flex content-center font-bold text-purple-800  justify-center text-2xl'>Create your Blog</div>
      <div className='flex flex-col m-4'>
      <input 
      className="mt-2 w-full h-9 p-1 border-2 outline-none border-yellow-500 rounded"
      type="text"
       placeholder='Titel'
       value={titel}
       onChange={e=>setTitel(e.target.value)}
       />
      <textarea
      className="mt-2 w-full h-72 p-1 border-2 outline-none border-yellow-500 rounded"
      placeholder='Description' cols="30" rows="10"
      onChange={e=>setDescription(e.target.value)}
      value={description}
      >
      </textarea>
      <input 
      className="mt-2 w-full h-9 p-1 border-2 outline-none border-yellow-500 rounded"
      type="text" placeholder='Image URL'
      onChange={e=>setImage(e.target.value)}
      value={image}
      />
      <button className='mt-16 text-xl bg-green-500 w-28 h-9 ml-[690px] rounded-md hover:bg-green-800' disabled={showbuttion}>Create</button>
      </div>
          
      </form>
    </div>
  )
}

export default CreateBloge
