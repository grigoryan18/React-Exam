import React from 'react'
import { IconCheck } from '../../icons/IconCheck'

export default function ContactModal() {
  return (
    <div className=' w-full fixed bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]' style={{height: "calc(100vh - 100px)"}}>
      <div className=' px-10 py-5 bg-white rounded-md'>
        <p className=' flex items-center gap-2'><IconCheck/> Your message has been sent successfuly!</p>
      </div>
    </div>
  )
}
