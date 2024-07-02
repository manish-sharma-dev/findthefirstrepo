"use client"
import React, { useState } from "react"
import { useContext } from "react"
import { ThemeContext } from "@/context/Themecontext"

export default function Navbar() {
    const [signup, setSingUp] = useState(true)
    const {theme, toggleTheme} = useContext(ThemeContext)
     // signup/login true means -> banda login nhi hai 
    // signup/login false means -> banda login  hai 

    // function to handle login logout 

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
            <div className="flex gap-9">
                <button onClick={toggleTheme}>{theme === 'dark'? 'light':'dark'}</button>

             {signup ? <button onClick={handlesignup} className="pl-4 pr-4">login</button> :<button onClick={handlelogout} >logout</button>}
            </div>
        </div>
    </>
  )
}
