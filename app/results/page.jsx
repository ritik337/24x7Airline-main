"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'


const result = () => {
  const params = useSearchParams()
  let data = {
    "fly_from":params.get("from"),
    "fly_to":params.get("to"),
    "date_from":params.get("departure"),
    "date_to":params.get("return"),
    "type":params.get("type"),
  }
  const [flightData, setflightData] = useState([])
  const requestFordata = async () => {
    try {
      const url = "http://localhost:8080/api/searchflight"
      let response = await fetch(url, { method: 'POST', body: JSON.stringify(data) })
      let flights = await response.json()
      setflightData(flights)
      console.log(flights)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() =>
    requestFordata
,[])
  return (
    <div></div>
  )
}

export default result