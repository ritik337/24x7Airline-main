import React from 'react'
import logo from "../Components/img/Untitled-1.png"
import Image from 'next/image'

function page() {
  return (
    <div className='MainContiner'>
      <div className="half-partition">
        <div className="logo">
            <Image src={logo} alt='Main logo of website' />
        </div>
      </div>
      <div className="half-partition">
            
      </div>
    </div>
  )
}

export default page
