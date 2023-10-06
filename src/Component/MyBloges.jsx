import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { server } from "..";
import Blogecard from './pages/Blogecard';

function MyBloges() {
  const [bloge,setBloge]=useState([]);

  const userBloge=async(e)=>
  {
   
console.log("setp 1")
try {
  
  const {data}=await axios.get(`${server}/blogges/get-myblogge`)
  console.log("step 2")
  if(data?.success)
  {
    setBloge(data?.myBlogs.bloge)
    
  }
 console.log(data)
} catch (error) {
console.log(error)}
  }
  useEffect(()=>
  {
userBloge();
  },[])

  return (
    <div>
      <Navbar/>
      {
        bloge&&bloge.map(bloge=>(
          <Blogecard
          count={bloge.count}
          titel={bloge.titel}
          description={bloge.description}
          image={bloge.image}
          user={bloge.user}
          upadet={bloge.updatedAt}
          />
        ))
      }
    </div>
  )
}

export default MyBloges
