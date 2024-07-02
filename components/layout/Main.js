"use client"

import React, { useEffect, useState } from 'react'

export default function Main({ onsearch }) {
  const [username,setUsername] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(() => {

    const fetchFirstRepository = async ()=> {
      const TOKEN = process.env.NODE_ENV

      const headers = {
        'Authorization': `token ${TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      };

      try {
        const url = `https://api.github.com/users/${username}/repos`;
        const response = await fetch(url, { headers });

        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        onsearch(data)

          // Log rate limit information
          console.log(`Rate Limit Remaining: ${response.headers.get('X-RateLimit-Remaining')}`);
          console.log(`Rate Limit Reset: ${new Date(response.headers.get('X-RateLimit-Reset') * 1000)}`);
        
      } catch (error) {
        console.error(error)
      }
    }

    fetchFirstRepository()

    }, 1500);

    return () => {
      clearTimeout(timeout);
    }
  },[username])

  const handleSubmit =(e) => {
    e.preventDefault();
    onsearch(username);
  }

  return (
    <div className='h-full mt-24 '>
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='font-sans font-bold text-center mb-4 main-h1' >Find The First Repo...</h1>
                <p style={{ fontFamily : "Fontdiner_Swanky"}} className='main-para text-center'>Are you looking for finding the first repository of your faviourite creator, curious to know what was ther first project...</p>
                <p className='text-center mt-10 mb-3 main-para'  style={{ fontFamily : "Fontdiner_Swanky"}}>Enter the github username here !!</p>
            </div>
            <form onSubmit={handleSubmit} >
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter the name'/>
              <button type='submit' className='form-btn' >O</button>
            </form>
        </div>
    </div>
  )
}
