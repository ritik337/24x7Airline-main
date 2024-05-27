"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import banner from '../img/Untitled-1.png'
import user from '../img/user (1).png'

const Navbar = () => {
  

  return (
    <div className="wrapper">
      <header>
        <div className="navbar">
          <nav>
            <div className="brand">
              <div className="image-holder">
                <Image src={banner} alt='this image for banner'/>
              </div>
            </div>
            <ul>
              <li><a href="#">Flights</a></li>
              <li><a href="#">Hotels</a></li>
              <li><a href="#">Trains</a></li>
              <li><a href="#">Help ?</a></li>
            </ul>
            <div className="right-nav">
              <div className="login-btn">
                <button className="btn-signup"><span><Image src={user} alt='this is an icon'/></span> Login / Signup</button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar