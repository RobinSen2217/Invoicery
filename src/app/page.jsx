'use client'


import Template1 from "./Layouts/Template1"
import React from "react"
import { useState } from "react"
import Template3 from "./Layouts/Template3"
import html2pdf from "html2pdf.js"

export default  function Home() {
  const [view,setView]=useState(null)
  const handelePreview=(e)=>{
e.preventDefault()
if (view===null){
  setView(1)
}else{
  setView(null)
}
  }

  const handleDownload=()=>{
  const printElement = document.getElementById('temp1').outerHTML;
  var opt = {
    margin:       [0,60,0,0],
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 1,height: 2000,width: 3800},
    jsPDF:        { unit: 'px', format: 'ledger', orientation: 'landscape' }
  };
  html2pdf().from(printElement).set(opt).save('bill.pdf');
  // console.log(printElement)
}
  
  return (
  <>
  <div>
{/* <Template3/> */}
  <div className="flex w-1/2 justify-evenly mx-auto">
    <button className="border-[3px] hover:bg-blue-600 hover:text-white px-2 py-1 border-solid border-blue-600 text-blue-600 m-4" onClick={handelePreview} type="button">Preview</button> 
    <button onClick={handleDownload} className="border-[3px] hover:bg-orange-600 hover:text-white px-2 py-1 border-solid border-orange-600 text-orange-600 m-4" type="button">Download Pdf</button> 
    <button className="border-[3px] hover:bg-green-600 hover:text-white px-2 py-1 border-solid border-green-600 text-green-600 m-4" onClick={handelePreview} type="button">Print Pdf</button> 
    
  </div>
  <div className={`${view?'visible':'hidden'}`}>
    <Template1/>
  </div>
  </div>
    {/* <Template2/> */}
  </>
  )
}
