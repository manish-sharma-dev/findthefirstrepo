"use client"

import React, { useEffect, useState } from 'react'

export default function Button({ props }) {
 const [button, setButton] = useState('')

 useEffect(()=> {
    setButton(props)
 },)

  return (
    <>
      <button>{button}</button>
    </>
  )
}
