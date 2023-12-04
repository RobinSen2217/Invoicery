import React from 'react'
import { PDFViewer,Document,Page } from '@react-pdf/renderer'

function Template3() {
   
  return (
    <div>
         <PDFViewer className='bg-red-500 mx-auto my-4'>
        <Document >
            <Page >
                
            </Page>
        </Document>
    </PDFViewer>
    </div>
  )
}

export default Template3
