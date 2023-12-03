'use client'
import React from 'react'
import Image from 'next/image'

function Template1(props) {

  
  const pdfGenerate=()=>{
    let doc=new jsPDF('landscape','px','a4','false')
    
  }

  return (
    <>
      <div className='p-4 ' id='temp1'>
        <div className={`flex flex-nowrap flex-col w-3/4 mx-auto gap-y-3 ${props.preview ? 'visible' : 'hidden'}`}>

          <div className='p-2 flex flex-col flex-nowrap border-2 border-black'>
            <h3 className='font-semibold underline-offset-4 underline decoration-black text-center mb-2 text-2xl'>GST/Tax Invoice</h3>
            <div className='w-full justify-between flex flex-row flex-nowrap'>
              <span>GST No: {props.gst ? props.gst : 'Enter GST Number'}</span>
              <span>Phone: {props.phone ? props.phone : 'Enter phone number'}</span>
            </div>
            <h1 className='text-4xl font-extrabold text-center my-1'>{props.Cname ? props.Cname : 'Company Name'}</h1>
            <p className='text-center w-[200px] mx-auto'>Address: {props.address ? props.address : 'Enter Company address'}</p>
            <p className='text-center'>Email : {props.email ? props.email : 'Enter Email Address'}</p>
          </div>

          <div className='w-full grid grid-cols-12 border-3 grid-rows-30 border-solid border-black '>
            <div className='col-span-3 border-t border-l border-black px-2 py-1'>Billed To</div>
            <div className='col-span-2 border-l border-t border-black px-2 py-1'>State Code: {props.sCode ? props.sCode : ''}</div>
            <div className='col-span-3 border-l border-t border-black px-2 py-1'>Shipped To</div>
            <div className='col-span-2 border-l border-t border-black px-2 py-1'>State Code: {props.destinationSCode ? props.destinationSCode : ''}</div>
            <div className='col-span-2 row-span-4 border-l border-r border-t border-black px-2 py-1'>Invoice No: {props.invoiceNo ? props.invoiceNo : 'Enter Invoice Number'}
              <br />
              <br />
              Date: {props.invoiceDate ? props.invoiceDate : 'Enter Invoice Date'}
            </div>

            <div className='col-span-5 row-span-6 border-black border-t border-l px-2 py-1 font-semibold'>{props.client ? props.client : 'Person Billed & Billing Address'}</div>
            <div className='col-span-5 row-span-5 border-black border-t border-l px-2 font-semibold py-1'>{props.destination ? props.destination : 'Person to which Delivered & Delivery Address'}</div>

            <div className='col-span-2 row-span-4 border-l border-r border-t border-black px-2 py-1'>Challan No: {props.sCode ? props.sCode : 'Enter Challan Number'}
              <br />
              <br />
              Date: {props.challanDate ? props.challanDate : 'Enter Challan Date'}
            </div>

            <div className='col-span-5 border-l border-t border-black px-2 py-1'>GST No: {props.gst ? props.gst : 'Enter GST Number'}</div>
            <div className='col-span-10 border-l border-t border-black px-2 py-1'>Client GST No: {props.clientGst ? props.clientGst : 'Enter Client GST Number'}</div>
            <div className='col-span-6 border-l border-t border-black px-2 py-1'>Contact Person: {props.contactPerson ? props.contactPerson : 'Enter Person Name'}</div>
            <div className='col-span-6 border-x border-t border-black px-2 py-1'>Contact No: {props.contactNo ? props.contactNo : 'Enter Contact Number'}</div>
            <div className='col-span-6 border-l border-t border-black px-2 py-1'>Purchase Order No: {props.purchaseNo ? props.purchaseNo : 'Enter Purchase Order Number'}</div>
            <div className='col-span-6 border-x border-t border-black px-2 py-1'>Purchase Date: {props.purchasedate ? props.purchaseDate : 'Enter Date on which Purchase Order No. Received'}</div>
            <div className='col-span-12 border-x border-t border-black px-2 py-1'>Transporter: {props.transporter ? props.transporter : 'Enter Transporter'}</div>

            <div className='col-span-6 border-l border-t border-black px-2 py-1'>GR/RR No: {props.grNo ? props.grNo : 'Enter GR/RR No.'}</div>
            <div className='col-span-6 border-x border-t border-black px-2 py-1'>GR/RR Date: {props.grDate ? props.grDate : 'Enter Date of Delivery'}</div>

            <div className='col-span-1 border-l border-t text-center border-black px-2 py-1'>S No.</div>
            <div className='col-span-4 border-l text-center border-t border-black px-2 py-1'>Description of Goods</div>
            <div className='col-span-2 text-center border-l border-t border-black px-2 py-1'>HSN Code</div>
            <div className='col-span-1 text-center border-l border-t border-black px-2 py-1'>Quantity</div>
            <div className='col-span-2 text-center border-l border-t border-black px-2 py-1'>Price</div>
            <div className='col-span-2 text-center border-x border-t border-black px-2 py-1'>Amount</div>

            {/* Good Records/Data */}
            <div className='col-span-1 row-span-4 border-l border-t border-black px-2 py-1'></div>
            <div className='col-span-4 row-span-4 border-l text-center border-t border-black px-2 py-1'></div>
            <div className='col-span-2 row-span-4 text-center border-l border-t border-black px-2 py-1'></div>
            <div className='col-span-1 row-span-4 text-center border-l border-t border-black px-2 py-1'></div>
            <div className='col-span-2 row-span-4 text-center border-l border-t border-black px-2 py-1'></div>
            <div className='col-span-2 row-span-4 text-center border-x border-t border-black px-2 py-1'></div>

            <div className='col-span-8 border-l border-t border-black px-2 py-1'>Final Amount in Words(Rupees): {props.amtWords ? props.amtWords : 'Enter final amount in Words'}</div>
            <div className='col-span-2  border-l border-t text-center border-black px-2 py-1'>Sub Total:</div>
            <div className='col-span-2  border-r border-t text-center border-black px-2 py-1'>{props.subTotal ? props.subTotal : ''}</div>

            <div className='col-span-8 border-l border-t text-center border-black px-2 py-1'>Amount of Tax Subjected to Reversal</div>

            <div className='col-span-2  border-l border-t text-center border-black px-2 py-1'>Other(Local Cartage):</div>
            <div className='col-span-2  border-r border-t text-center border-black px-2 py-1'>{props.localCartage ? props.localCartage : ''}</div>

            <div className='col-span-2 border-l border-t text-center border-black px-2 py-1'>CGST</div>
            <div className='col-span-3 border-l border-t text-center border-black px-2 py-1'>SGST</div>
            <div className='col-span-3 border-l border-t text-center border-black px-2 py-1'>IGST</div>

            <div className='col-span-2  border-l border-t text-center border-black px-2 py-1'>Total:</div>
            <div className='col-span-2  border-r border-t text-center border-black px-2 py-1'>{props.total ? props.total : ''}</div>

            <div className='col-span-2 border-l border-t text-center border-black px-2 py-1'>{props.cgst ? props.cgst : 'Enter CGST'}</div>
            <div className='col-span-3 border-l border-t text-center border-black px-2 py-1'>{props.sgst ? props.sgst : 'Enter SGST'}</div>
            <div className='col-span-3 border-l border-t text-center border-black px-2 py-1'>{props.igst ? props.igst : 'Enter IGST'}</div>

            <div className='col-span-2  border-l border-t text-center border-black px-2 py-1'>CGST@{props.cgstRate ? props.cgstRate : 'n%'}:</div>
            <div className='col-span-2  border-r border-t text-center border-black px-2 py-1'>{props.cgst ? props.cgst : ''}</div>

            <div className='col-span-4 row-span-3 border-l border-t border-black px-2 py-1'>Bank Name: {props.bankName} <br /> <br /> Ltd A/C No: <span className='text-red-500'>{props.ltd}</span>
            </div>
            <div className='col-span-4 row-span-3 border-l border-t border-black px-2 py-1'>Bank Branch Address: {props.bankAd} <br /><br />IFSC: <span className='tex-red-500'>{props.ifsc}</span></div>

            <div className='col-span-2  border-l border-t text-center border-black px-2 py-1'>SGST@{props.sgstRate ? props.sgstRate : 'n%'}:</div>
            <div className='col-span-2  border-r border-t text-center border-black px-2 py-1'>{props.sgst ? props.sgst : ''}</div>

            <div className='col-span-2  border-l border-t text-center border-black px-2 py-1'>IGST@{props.igstRate ? props.igstRate : 'n%'}:</div>
            <div className='col-span-2  border-r border-t text-center border-black px-2 py-1'>{props.igst ? props.igst : ''}</div>

            <div className='col-span-2  border-l border-t text-center border-black px-2 py-1'>Total Invoice Value:</div>
            <div className='col-span-2  border-r border-t text-center border-black px-2 py-1'>{props.finalAmt ? props.finalAmt : ''}</div>

            <div className='col-span-8 row-span-4 border-l border-y  border-black px-2 py-1'>Terms & Conditions</div>

            <div className='col-span-4 row-span-4 border-x border-y text-right flex flex-col flex-nowrap items-end border-black pl-2 pr-4 pb-1'>
              For {props.Cname ? props.Cname : 'Company Name'} <br />
              <Image className='mt-2 text-right' width={70} height={70} src="/WhatsApp Image 2023-11-07 at 23.26.15_3a89213b.jpg" alt='sign' />
              <span className='text-left'>Authorised Signatory</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Template1
