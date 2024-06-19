"use client"
import React, { useEffect, useState } from 'react'
import "./cardCss.css"
import Image from 'next/image'
import airlineRecord from "../LogoAirline/airlineRecord"

function Card(props) {
  const [logo,setLogo] = useState("")
  const GetLogo = ()=>{
    let logo = airlineRecord(props.data.airlines[0])
    setLogo("http://localhost:8080/static/airline"+logo.logo)
    // setLogo("http://localhost:8080/static/airline/AAB.png")
  }
  useEffect(()=>{
    GetLogo()
  },[])
  return (
    <div className="cardbody">
      <div className="card-Image-Airline width-20 flexCenter">
        {/* <Image src={logo} alt='Airline IMage' width={28} height={28}/> */}
        <img src={logo} alt="" />
      </div>
      <div className="Middle-Data-holder width-60">
          <div className="d-block-main">
            <div className="block-top height-50 flex justify-around items-center">
              <div className="start-Route">
                {props.data.cityFrom}
              </div>
              <div className="Line-dotted"></div>
              <div className="End-Route">
              {props.data.cityTo}
              </div>
            </div>
            <div className="block-bottom height-50">

            </div>
          </div>
      </div>
      <div className="End-Flex-data width-20">
      <div className="d-block-main">
            <div className="block-top height-50">
              {props.data.price}
            </div>
            <div className="block-bottom height-50">
              <button className='BookBtn'>Book now</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card
