"use client"
import Navbar from '@/components/layout/Navbar';
import Main from '@/components/layout/Main';
import Repo from '@/components/layout/Repo';
import React,{ useState }  from 'react';

export default function Home() {
  const [showResult,setShowResult] = useState(false)
  const [searchData, setSearchData] = useState(null);

  function handlesearch(data){
    setSearchData(data)
    setShowResult(true)
  }

  return (
    <div>
      <Navbar />
      <Main onsearch={handlesearch}/>
      {showResult && <Repo searchData={searchData} />}
    </div>
  );
}
