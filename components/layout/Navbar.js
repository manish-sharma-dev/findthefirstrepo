"use client"
import React, { useState } from "react"

export default function Navbar() {
    const [signup, setSingUp] = useState(true)
    const [mode, setMode] = useState('Dark')
     // signup/login true means -> banda login nhi hai 
    // signup/login false means -> banda login  hai 

    // function to handle login logout 

    function handlesignup(){
        setSingUp(false)
    }

    function handlelogout(){
        setSingUp(true)
    }

    // functioon to handle mode 

    function changetolightmode(){
        setMode('Light')
    }


    return (
    <>
        <div className='flex justify-between mt-6'>
            <h2 className='text-sm font-sans'>FindTheFirstRepo...</h2>
            <div className="flex gap-9">
             {mode === 'Dark' ? <button onClick={changetolightmode}>Light</button> : <button  onClick={() => setMode('Dark')} >Dark</button>}
             {signup ? <button onClick={handlesignup} className="pl-4 pr-4">login</button> :<button onClick={handlelogout} >logout</button>}
            </div>
        </div>
    </>
  )
}
