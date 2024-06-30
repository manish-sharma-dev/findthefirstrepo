"use client"
import React, { useState } from "react"

export default function Navbar() {
    const [signup, setSingUp] = useState(true)
    // signup/login true means -> banda login nhi hai 
    // signup/login false means -> banda login  hai 

    function handlesignup(){
        setSingUp(false)
    }

    function handlelogout(){
        setSingUp(true)
    }


    return (
    <>
        <div className='flex justify-between mt-6'>
            <h2 className='text-sm font-sans'>FindTheFirstRepo...</h2>
            {signup ? <button onClick={handlesignup}>login</button> :<button onClick={handlelogout}>logout</button>}
        </div>
    </>
  )
}
