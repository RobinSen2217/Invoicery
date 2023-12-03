'use client'

import jsPDF from "jspdf"
import html2canvas from "html2canvas"
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

  const pdfGenerate=()=>{
    const input = document.getElementById('temp1');
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', 'a4', false);
      pdf.addImage(imgData, 'JPEG', -30,0, 500, 550, undefined, false);
        pdf.save("download.pdf");
    })
  }
  return (
  <>
  <div>

  <div className="flex w-1/2 justify-evenly mx-auto">
    <button className="border-[3px] hover:bg-blue-600 hover:text-white px-2 py-1 border-solid border-blue-600 text-blue-600 m-4" onClick={handelePreview} type="button">Preview</button> 
    <button className="border-[3px] hover:bg-orange-600 hover:text-white px-2 py-1 border-solid border-orange-600 text-orange-600 m-4" onClick={pdfGenerate} type="button">Download Pdf</button> 
    <button className="border-[3px] hover:bg-green-600 hover:text-white px-2 py-1 border-solid border-green-600 text-green-600 m-4" onClick={handelePreview} type="button">Print Pdf</button> 
    
  </div>
    <Template1 preview={view}/>
  </div>
    {/* <Template2/> */}
  </>
  )
}
