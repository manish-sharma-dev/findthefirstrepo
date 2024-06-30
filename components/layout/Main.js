"use client"

import React from 'react'

export default function Main() {
  return (
    <div className='h-full mt-24 '>
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='font-sans font-bold text-center mb-4' >Find The First Repo...</h1>
                <p style={{ fontFamily : "Fontdiner_Swanky"}} className='main-para text-center'>Are you looking for finding the first repository of your faviourite creator, curious to know what was ther first project...</p>
                <p className='text-center mt-10 mb-3 main-para'  style={{ fontFamily : "Fontdiner_Swanky"}}>Enter the github username here !!</p>
            </div>
            <form action='submit' >
              <input type='text' placeholder='Enter the name'/>
              <button type='submit' className='form-btn'>O</button>
            </form>
        </div>
    </div>
  )
}
