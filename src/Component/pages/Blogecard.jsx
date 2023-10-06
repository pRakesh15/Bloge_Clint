import React from 'react'

function Blogecard(props) {
  if(props.count==0)
  {
    return(
      <div>No Bolg Found</div>
    )
  }
  return (
    <div 
      className="flex flex-col ml-72 mt-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-4xl  md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-32 md:rounded-none md:rounded-l-lg"
        src={props.image}
        alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {props.titel}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {props.description}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
        author:{props.user?props.user.username:"null"}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
       updateAt:{props.upadet}
        </p>
        <button className='text-lg mt-5 -ml-14'>LernMore</button>
      </div>
    </div>
  )
}

export default Blogecard
