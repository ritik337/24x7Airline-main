"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import filter from "../Components/img/filter.png"
import airplane from "../Components/img/airplane.png"
import Image from 'next/image'
import ReactCountryFlag from "react-country-flag"
import Card from "../Components/Card/Card"


const result = () => {
  const params = useSearchParams()
  let data = {
    "fly_from": params.get("from"),
    "fly_to": params.get("to"),
    "date_from": params.get("departure"),
    "date_to": params.get("return"),
    "type": params.get("type"),
    "curr": params.get("curr")
  }
  const [distnce,setDistance] = useState(0)
  const [flightData, setflightData] = useState([])
  const requestFordata = async () => {
    try {
      const url = "http://localhost:8080/api/searchflight"
      let response = await fetch(url, { method: 'POST', body: JSON.stringify(data) })
      let flights = await response.json()
      setflightData(flights)
      setDistance(flights[0].distance)
      console.log(flights)
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }
    useEffect(() =>
      requestFordata
  ,[])
  const [sidebar, setSidebar] = useState(false) 

  return (
    <div>
      <div className={sidebar ? "sidebar" : "hidden"}>

      </div>
      <div className="resultPageMain">
        <div className="top-serach-qurries">
          {/* Flex middle part starts */}
          <div className="middle-part-wrap">
    <div className="plane-holder">
      <Image src={airplane} alt='Airplane Image'/>
    </div>
            <div className="center-dive">

            </div>

<div className="white-box">
  <div className="data-table-data-holder">
    <div className="table-left-cont sectionHalf">
      <div className="location-from">
          <div className="location-flag">
            <img src="" alt="" />
          </div>
          <div className="location-name">
            Ahemdabad
          </div>
          <div className="departure-date-time">
            12-10-2004 <span> </span><span>12:30 am</span>
          </div>
      </div>
    </div>
    <div className="table-center-cont sectionHalf-lg"> {distnce} KM</div>
    <div className="table-right-cont sectionHalf">
    <div className="location-from">
          <div className="location-flag">
            <img src="" alt="" />
          </div>
          <div className="location-name">
            Ahemdabad
          </div>
          <div className="departure-date-time">
            12-10-2004 <span> </span><span>12:30 am</span>
          </div>
      </div>
    </div>
  </div>
</div>
          </div>
          {/* flex middle End here */}
          <div className="filter-option">
            <div className="filter-row-main">
              <div className="counter">
                4
              </div>
              <button onClick={() => setSidebar(!sidebar)}><Image src={filter} alt='Filter button' /></button>
            </div>
          </div>
        </div>
        <div className="results-view">
          {
            flightData.map((flight,index)=>{
              return <Card key={index} data={flight} />
            })
          }
          {/* <Card/> */}
        </div>
      </div>
    </div>
  )
}

export default result