import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import Navbar from "./Navbar";
import Blogecard from "./pages/Blogecard";

function Bloges() {
  const [bloge,setBloge]=useState([]);

  const getBloges=async()=>
  {
    try {
      const {data}=await axios.get(`${server}/blogges/all-blogge`)
      if(data?.success)
      {
        setBloge(data?.allBlogs)
        
      }
    } catch (error) {
     console.log(error)
    }
  }
  useEffect(()=>
  {
getBloges();
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
  );
}

export default Bloges;
