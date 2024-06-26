"use client"
import React, { useEffect, useState } from 'react'
import "./cardCss.css"
import Image from 'next/image'
import airlineRecord from "../LogoAirline/airlineRecord"

function Card(props) {
  const data = {
    "id": "10e010ff4dcf00000a06f5b9_0|10ff1edb4dd100001c3b5b2c_0|1edb150a4dd10000b03c1fe5_0|150a0a234dd20000d8adfa86_0",
    "flyFrom": "AMD",
    "flyTo": "MAG",
    "cityFrom": "Ahmedabad",
    "cityCodeFrom": "AMD",
    "cityTo": "Madang",
    "cityCodeTo": "MAG",
    "countryFrom": {
      "code": "IN",
      "name": "India"
    },
    "countryTo": {
      "code": "PG",
      "name": "Papua New Guinea"
    },
    "local_departure": "2024-07-15T23:15:00.000Z",
    "utc_departure": "2024-07-15T17:45:00.000Z",
    "local_arrival": "2024-07-18T12:20:00.000Z",
    "utc_arrival": "2024-07-18T02:20:00.000Z",
    "nightsInDest": null,
    "quality": 1105.665505,
    "distance": 8538.95,
    "duration": {
      "departure": 203700,
      "return": 0,
      "total": 203700
    },
    "price": 641,
    "conversion": {
      "EUR": 641
    },
    "fare": {
      "adults": 641,
      "children": 641,
      "infants": 641
    },
    "price_dropdown": {
      "base_fare": 641,
      "fees": 0
    },
    "bags_price": {
      "1": 91.785
    },
    "baglimit": {
      "hand_dimensions_sum": 115,
      "hand_height": 36,
      "hand_length": 56,
      "hand_weight": 7,
      "hand_width": 23,
      "hold_dimensions_sum": 158,
      "hold_height": 52,
      "hold_length": 78,
      "hold_weight": 16,
      "hold_width": 28
    },
    "availability": {
      "seats": 1
    },
    "airlines": [
      "AK",
      "PX"
    ],
    "route": [
      {
        "id": "10e010ff4dcf00000a06f5b9_0",
        "combination_id": "10e010ff4dcf00000a06f5b9",
        "flyFrom": "AMD",
        "flyTo": "KUL",
        "cityFrom": "Ahmedabad",
        "cityCodeFrom": "AMD",
        "cityTo": "Kuala Lumpur",
        "cityCodeTo": "KUL",
        "local_departure": "2024-07-15T23:15:00.000Z",
        "utc_departure": "2024-07-15T17:45:00.000Z",
        "local_arrival": "2024-07-16T07:15:00.000Z",
        "utc_arrival": "2024-07-15T23:15:00.000Z",
        "airline": "AK",
        "flight_no": 90,
        "operating_carrier": "AK",
        "operating_flight_no": "90",
        "fare_basis": "",
        "fare_category": "M",
        "fare_classes": "X",
        "return": 0,
        "bags_recheck_required": false,
        "vi_connection": false,
        "guarantee": false,
        "equipment": null,
        "vehicle_type": "aircraft"
      },
      {
        "id": "10ff1edb4dd100001c3b5b2c_0",
        "combination_id": "10ff1edb4dd100001c3b5b2c",
        "flyFrom": "KUL",
        "flyTo": "MNL",
        "cityFrom": "Kuala Lumpur",
        "cityCodeFrom": "KUL",
        "cityTo": "Manila",
        "cityCodeTo": "MNL",
        "local_departure": "2024-07-17T08:15:00.000Z",
        "utc_departure": "2024-07-17T00:15:00.000Z",
        "local_arrival": "2024-07-17T12:15:00.000Z",
        "utc_arrival": "2024-07-17T04:15:00.000Z",
        "airline": "AK",
        "flight_no": 582,
        "operating_carrier": "AK",
        "operating_flight_no": "582",
        "fare_basis": "",
        "fare_category": "M",
        "fare_classes": "K",
        "return": 0,
        "bags_recheck_required": true,
        "vi_connection": true,
        "guarantee": true,
        "equipment": null,
        "vehicle_type": "aircraft"
      },
      {
        "id": "1edb150a4dd10000b03c1fe5_0",
        "combination_id": "1edb150a4dd10000b03c1fe5",
        "flyFrom": "MNL",
        "flyTo": "POM",
        "cityFrom": "Manila",
        "cityCodeFrom": "MNL",
        "cityTo": "Port Moresby",
        "cityCodeTo": "POM",
        "local_departure": "2024-07-17T21:25:00.000Z",
        "utc_departure": "2024-07-17T13:25:00.000Z",
        "local_arrival": "2024-07-18T05:00:00.000Z",
        "utc_arrival": "2024-07-17T19:00:00.000Z",
        "airline": "PX",
        "flight_no": 11,
        "operating_carrier": "PX",
        "operating_flight_no": "11",
        "fare_basis": "OYD1PH",
        "fare_category": "M",
        "fare_classes": "O",
        "return": 0,
        "bags_recheck_required": true,
        "vi_connection": true,
        "guarantee": true,
        "equipment": null,
        "vehicle_type": "aircraft"
      },
      {
        "id": "150a0a234dd20000d8adfa86_0",
        "combination_id": "150a0a234dd20000d8adfa86",
        "flyFrom": "POM",
        "flyTo": "MAG",
        "cityFrom": "Port Moresby",
        "cityCodeFrom": "POM",
        "cityTo": "Madang",
        "cityCodeTo": "MAG",
        "local_departure": "2024-07-18T11:10:00.000Z",
        "utc_departure": "2024-07-18T01:10:00.000Z",
        "local_arrival": "2024-07-18T12:20:00.000Z",
        "utc_arrival": "2024-07-18T02:20:00.000Z",
        "airline": "PX",
        "flight_no": 110,
        "operating_carrier": "PX",
        "operating_flight_no": "110",
        "fare_basis": "KYV1",
        "fare_category": "M",
        "fare_classes": "K",
        "return": 0,
        "bags_recheck_required": true,
        "vi_connection": true,
        "guarantee": true,
        "equipment": null,
        "vehicle_type": "aircraft"
      }
    ],
    "booking_token": "GhGgERF3d1G3X402eLv71ynXcl4OidkQvTwh3zmTGcob8honYvPWS8g5tEzGSh6rHfzi91NLdOmPxUpsdWs48c7NcSKtKmnAFHVA0NfprT6f8ZyEQEZ6_XlqsT6n2_lGTS5X0zeZA7hl-x5b542-u1uT37i-7losal0t48pZasoydE-4FkdIB3ktJ4h9TSmcWDToCt9lmSLdjRH3SNsSk_8izkQVKk1lnrKao_9i_MDJcUF0-c780DGzbV8_fHlRaso2CRWRRX0gyg09TPAN_v7Wd-UPxzW5zQWn6-wRFWaI-o_MuCr5iHmbV__c8WqigTUP6cWcTAHe5PwhUU10sKIDTiuCJj_dGbwjaJ2ZEgZh0SfVmNLMlM1xXefx-x4jVAo42HmkeZc13XKjOKSLdholrKWMbd8pPORoa2uSQIiQaWjd9gQbSb58a5PJyytQt6bjfy9po3g8RCVRSp3giTdeBsT2w2noKt-HcfSWssRg23G5zC-KLxqoGDyRKUdo_WO4rfRSvyNqkA-GW7B-I7smKaxR-RIZPNqmZQYq90cLeXBgfWAklqadNil2xRqcEjdzzFkerwCzHlYW7jqjx2OpKuAWTVjbpoX7tYyAvOptQill9YjF61IGSnhcEBB-lUIerFwKRhimdP40oBZhoxc_deifEpNOuUmVSRXIF3f9fGLGvP8PtdxnUS6P6tachvsgdLn5J4F2GJmuD88E-XZNdjz4t-Q6nReOUTFo92lsecnVDm28MLiw0s1C5vHuud4mtj-f-nqPfTEbTM_dfjrQ9bMwcLgB030c8oqdvJxqapjpHKEFpPC1lAcNs3MIIwYuFBGBrMrhzVD0stQ0h-NYmHMJxmLWMaMush1TjZD1lPne_076EWKoX6TNmqE8ai3kCZZQnBq4Fu-cFCyczHCRsyr7TfPpOf36f6wnpFGzx-vsvfhfhsGa1KKwRbNQrrsNPs5UlWTgMM3b03h3aEg==",
    "facilitated_booking_available": true,
    "pnr_count": 4,
    "has_airport_change": false,
    "technical_stops": 0,
    "throw_away_ticketing": false,
    "hidden_city_ticketing": false,
    "virtual_interlining": true,
    "offer_variants": null
  }
  const [logo,setLogo] = useState("")
  const GetLogo = ()=>{
    let logo = airlineRecord(props.data.airlines[0])
    setLogo("http://localhost:8080/static/airline"+logo.logo)

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
              {/* {data.cityTo} */}
              </div>
            </div>
            <div className="block-bottom height-50 flex justify-evenly">
               jii
            </div>
          </div>
      </div>
      <div className="End-Flex-data width-20">
      <div className="d-block-main">
            <div className="block-top height-50">
              {props.data.price}
              {/* {data.price} */}
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
