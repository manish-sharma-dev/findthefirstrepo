"use client"
import React, { useEffect, useState } from 'react'

export default function Profile({ searchData }) {
  const [data,setData] = useState('')

  useEffect(()=>{
    const noofRepository = parseInt(searchData.length);
    const lastrepo = searchData[noofRepository - 1]
    console.log(lastrepo)
    setData(lastrepo)
  })

  function openprofile(){
    window.open(data?.owner?.html_url)
  }

  function openlastRepoUrl(){
    window.open(data?.html_url)
  }

  return (
    <>
        {data && (
        <div className='relative'>
          <div className=' ml-24 mr-24 mt-16 overflow-auto profile_card'>
            <div className="p-3 flex justify-between gap-20">
                        <div className="text-sm">
                            <p className="text-sm cursor-pointer" onClick={openprofile}>{data?.full_name }</p> 
                            <p className="text-xs mt-2 opacity-80 mb-5">Built by:{data?.owner?.login}<span className='built_by pl-3 text-xs'>{data?.created_at}</span> </p>
                            <p className="text-xs mb-4">{!data.description ? 'description not avialable':data.description}</p>

                            <div className='flex items-center'>
                              <p className="text-sm">{data?.language}</p>
                              {/* <Star className='mt-6 ml-5 mr-1'  size={9}/> */}
                              <p className='text-xs pl-3 pr-3'>star_count: {data?.stargazers_count}</p> 
                              {/* <GitBranch className='mt-6 ml-2 mr-1' size={9}/> */}
                              <p className='text-xs'>fork_count :{data?.forks_count}</p>
                            </div>

                        </div>

                        <div className='secondpart'>
                          <img src={data?.owner?.avatar_url} alt='profileimg' className='secondPartImg '/>
                        </div>   
            </div>
          </div>

          <div className='absolute left-0 ml-24 mt-10'><button className='know-more-btn' onClick={openlastRepoUrl} >Want to know more about this repo....</button></div>
        </div>
      )}
  </>
  )
}
