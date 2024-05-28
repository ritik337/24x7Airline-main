"use client"
import Image from "next/image";
import CustomInput from "./Components/CustomInput/CustomInput";
import TravlerInput from "./Components/Travler-Input/TravlerInput";
import { useEffect, useState } from "react";
import cardimage from './Components/img/work-1.png'
import checkmark from './Components/img/check.png'
import customersupport from './Components/img/support.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus,faPlus } from "@fortawesome/free-solid-svg-icons";
import {SimpleSchedule} from "./Components/Calander/SimpleSchedule"
import Link from "next/link";

export default function Home() {
  const [returns, setreturn] = useState(false)
  const [returnsval, setreturnval] = useState()
  const [departure,setdeparture] = useState()
  const [loading,setloading]= useState(true)
  const [showmenue,setshowmenue] = useState(false)
  const [adults,setadults]= useState(1)
  const [child,setchild]= useState(0)
  const [infants,setinfants] = useState(0)
  const [fly_from,setflyfrom] = useState()
  const [flyto,setflyto]= useState()
  const [flighttype,setflighttype]= useState('return')
  const [showCal,setshowCal] = useState(false)
  const [showCalret,setshowCalret] = useState(false)
  const viewmenue = () =>{
    setshowmenue(true)
  }
  const hidemenue = () =>{
    setshowmenue(false)
  }
  const disablereturn = () => {
    setflighttype('oneway')
    setreturn(true)
  }
  const enablereturn = () => {
    setreturn(false)
    setflighttype('return')
  }
  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 3);
  },[loading])
  const setvaluedep = (date)=>{
    setdeparture(date)
  }
  const setvaluedepret = (date)=>{
    setreturnval(date)
  }
  return (
    <div className="wrapper">
      <div id="mask" className={loading?'mask':'hide'}>
        <div className={loading?'loader':'hide'}>

        </div>
      </div>
      <div className="section-htmlForm">
        <div className="section-text">
          <div className="texts">
            <div className="text-holder-lg text">
              <h3>Book Cheap Flights over  500 + Airlines</h3>
            </div>
            <div className="text-holder-sm text">
              <h4>Call us at our 24/7 (Toll-Free) Number +91 7027506275 to Get Cheap Flights!</h4>
            </div>
          </div>
        </div>
        <div className="formbox">
          <form onSubmit={(e)=>e.preventDefault()} method="post">
            <div className="ui-grid content-flex-start">
              <div className="ui-grid-row flex-start">
                <div className="ui-grid-col-flex">
                  <input type="radio" name="triptype" id="" value="return" onClick={enablereturn} defaultChecked /><span>Round Trip</span>
                  <input type="radio" name="triptype" id="" value="oneway" onClick={disablereturn} /><span>One Way</span>
                  <div className="select-menue">
                    <select name="" id="">
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First">First</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="ui-grid-row">
                <div className="ui-grid-col">
                  <label htmlFor="">Fly From</label>
                  <CustomInput value={setflyfrom}/>
                </div>
                <div className="ui-grid-col">
                  <label htmlFor="">Fly To</label>
                  <CustomInput value={setflyto}/>
                </div>
                <div className="ui-grid-col">
                  <label htmlFor="">Departure</label>
                  <input type="text" name="departure" id="departure" defaultValue={departure} onClick={()=>setshowCal(!showCal)}/>
                  <SimpleSchedule view={showCal} viewFun = {setshowCal} valuesetter={setvaluedep}/>
                </div>
                <div className="ui-grid-col">
                  <label htmlFor="">Return</label>
                  <input type="text" name="return" id="return" disabled={returns} defaultValue={returnsval} readOnly={returns} onClick={()=>setshowCalret(!showCalret)}/>
                  <SimpleSchedule view={showCalret} viewFun = {setshowCalret} valuesetter={setvaluedepret}/>
                </div>
                <div className="ui-grid-col">
                  <label htmlFor="">Travlers</label>
                  <input type="number" name="travlers" id="travlers" onClick={viewmenue} value={adults+child+infants} readOnly={true}  />
                  <div className={showmenue?"travlers-info-box":"hide"} id="travlerhtmlFormMain">
                    <div className="text-header">
                      <h4>Add Travlers</h4>
                    </div>
                    <div className="passenger-ui-grid">
                      <div className="passenger-ui-grid-row">
                        <div className="ui-passenger-col-icon">
                          Adults
                        </div>
                        <div className="ui-passenger-right-col">
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={()=>{
                              if (adults>1){
                                setadults(adults-1)
                              }
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                          </div>
                          <div className="ui-passenger-input-box">
                            <input type="number" name="" id="inputAdult" className="valueHolder" value={adults} readOnly={true} disabled={true} />
                          </div>
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={()=>setadults(adults+1)}><FontAwesomeIcon icon={faPlus} /></button>
                          </div>
                        </div>
                      </div>
                      <div className="passenger-ui-grid-row">
                        <div className="ui-passenger-col-icon">
                          Children
                        </div>
                        <div className="ui-passenger-right-col">
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={()=>{
                              if (child>0){
                                setadults(child-1)
                              }
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                          </div>
                          <div className="ui-passenger-input-box">
                            <input type="number" name="" id="inputChildern" className="valueHolder" value={child} readOnly={true} disabled={true} />
                          </div>
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={()=>setchild(child+1)}><FontAwesomeIcon icon={faPlus} /></button>
                          </div>
                        </div>
                      </div>
                      <div className="passenger-ui-grid-row">
                        <div className="ui-passenger-col-icon">
                          Infants
                        </div>
                        <div className="ui-passenger-right-col">
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={()=>{
                              if (infants>0){
                                setadults(infants-1)
                              }
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                          </div>
                          <div className="ui-passenger-input-box">
                            <input type="number" name="" id="inputInfants" className="valueHolder" value={infants} readOnly={true} disabled={true} />
                          </div>
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={()=>setinfants(infants+1)}><FontAwesomeIcon icon={faPlus} /></button>
                          </div>
                        </div>
                      </div>
                      <div className="ui-grid-passanger-row">
                        <div className="ui-grid-passenger-col lg-right">
                          <button type="button" className="btnm-sm" onClick={hidemenue}>Confirm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button id="submitbtn" className="btnsubmit btnm"><Link href={{pathname:'results',query:{
                  "from":fly_from,
                  "to":flyto,
                  "type":flighttype,
                  "departure":departure,
                  "return":returnsval,
                  "child":child,
                  "infant":infants,
                  "adults":adults,
                }}}>Search</Link></button>
              </div>
            </div>
          </form>
        </div>
        <div className="lower-ads-sec">
          <div className="offer-first-card-lg">
            <div className="card-lg">
              <div className="card-flex">
                <div className="card-text">
                  <div className="text-lg">
                    <h3>Need help booking? Our agents are ready!</h3>
                  </div>
                  <div className="text-sm">
                    <h5>Call us 24/7 at <a href="tel:+917027506275">7027506275</a></h5>
                  </div>
                </div>
                <div className="card-image-main">
                  <Image alt="customer support" src={customersupport} />
                </div>
              </div>
            </div>
          </div>

          <div className="home-our-promis">
            <div className="custom-table">
              <div className="table-head">
                <h3>Here's why travelers choose 24X7Airline</h3>
              </div>
              <div className="ui-grid-row" style={{padding:'0'}}>
                <div className="ui-grid-col-lg">
                  <div className="col-head">
                    <span className="image-check"><Image alt="this is check sign" src={checkmark} /></span><h4>Get Great Deals!</h4>
                  </div>
                  <div className="col-text">
                    <p>Choose from 500+ airlines htmlFor low airfares!</p>
                  </div>
                </div>
                <div className="ui-grid-col-lg">
                  <div className="col-head">
                    <span className="image-check"><Image alt="this is check sign" src={checkmark} /></span><h4>Get Great Deals!</h4>
                  </div>
                  <div className="col-text">
                    <p>Choose from 500+ airlines htmlFor low airfares!</p>
                  </div>
                </div>
                <div className="ui-grid-col-lg">
                  <div className="col-head">
                    <span className="image-check"><Image alt="this is check sign" src={checkmark} /></span><h4>Get Great Deals!</h4>
                  </div>
                  <div className="col-text">
                    <p>Choose from 500+ airlines htmlFor low airfares!</p>
                  </div>
                </div>
                <div className="ui-grid-col-lg">
                  <div className="col-head">
                    <span className="image-check"><Image alt="this is check sign" src={checkmark} /></span><h4>Get Great Deals!</h4>
                  </div>
                  <div className="col-text">
                    <p>Choose from 500+ airlines htmlFor low airfares!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-offers">
              <div className="ui-grid">
                <div className="ui-grid-col-lg">
                  <h3>Top Deals Today</h3>
                </div>
                <div className="ui-grid-row">
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage} />
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage} />
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage} />
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage} />
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui-grid-row">
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage}/>
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage} />
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage} />
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="ui-grid-col full">
                    <div className="work">
                      <Image alt="this image htmlFor cards" src={cardimage} />
                      <div className="layer">
                        <h3>Social Media App</h3>
                        <p>This app helps you to connect people globally install it from playstore</p>
                        <a href="#">Search Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
