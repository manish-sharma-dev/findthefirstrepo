"use client"
import React from 'react'

export default function Profile() {
  return (
    <div className='relative'>
      <div className=' ml-24 mr-24 mt-16 overflow-auto profile_card'>
        <div className="p-4 flex justify-between gap-20">
                    <div className="text-sm">
                        <p className="text-sm ">full name</p> 
                        <p className="text-xs mt-2 opacity-80 mb-3">Built by: ownername <span className='built_by pl-3 text-xs'>created_at</span> </p>
                        <p className="text-xs mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae incidunt, ab harum sequi totam rerum quaerat assumenda eius. Explicabo sapiente libero dolorem, ratione quaerat sit nihil numquam quas velit.</p>

                        <div className='flex items-center'>
                          <p className="text-sm">language</p>
                          {/* <Star className='mt-6 ml-5 mr-1'  size={9}/> */}
                          <p className='text-xs pl-3 pr-3'>373</p> 
                          {/* <GitBranch className='mt-6 ml-2 mr-1' size={9}/> */}
                          <p className='text-xs'>11</p>
                        </div>

                    </div>

                    <div className='secondpart'>
                       <img src='#' alt='profileimg' className='secondPartImg' />
                    </div>   
        </div>
      </div>

       <div className='absolute left-0 ml-24 mt-10'><button className='know-more-btn' >Want to know more about this repo....</button></div>
    </div>
  )
}
