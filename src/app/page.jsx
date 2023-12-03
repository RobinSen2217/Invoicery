'use client'

import Template1 from "./Layouts/Template1"
import React from "react"
import { useState } from "react"
export default function Home() {
  const [view,setView]=useState(null)
  const handelePreview=(e)=>{
e.preventDefault()
if (view===null){
  setView(1)
}else{
  setView(null)
}
  }
  return (
  <>
  <div>
    <button className="border-[3px] hover:bg-blue-600 hover:text-white px-2 py-1 border-solid border-blue-600 text-blue-600 m-4" onClick={handelePreview} type="button">Preview</button> 
    <Template1 preview={view}/>
  </div>
  </>
  )
}
