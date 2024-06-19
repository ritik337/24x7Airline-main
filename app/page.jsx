"use client"
import Image from "next/image";
import CustomInput from "./Components/CustomInput/CustomInput";
import TravlerInput from "./Components/Travler-Input/TravlerInput";
import { useEffect, useState } from "react";
import cardimage from './Components/img/work-1.png'
import checkmark from './Components/img/check.png'
import customersupport from './Components/img/support.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SimpleSchedule } from "./Components/Calander/SimpleSchedule"
import Link from "next/link";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Home() {
  const [returns, setreturn] = useState(false)
  // const [returnsval, setreturnval] = useState()
  // const [departure, setdeparture] = useState()
  const [loading, setloading] = useState(true)
  const [showmenue, setshowmenue] = useState(false)
  const [adults, setadults] = useState(1)
  const [child, setchild] = useState(0)
  const [infants, setinfants] = useState(0)
  const [fly_from, setflyfrom] = useState()
  const [flyto, setflyto] = useState()
  const [flighttype, setflighttype] = useState('return')
  const [showCal, setshowCal] = useState(false)
  const [showCalret, setshowCalret] = useState(false)
  const viewmenue = () => {
    setshowmenue(true)
  }
  const hidemenue = () => {
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
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3);
  }, [loading])
  const [StartDateDeparture, setStartDateDeparture] = useState(new Date());
  const [startDateReturn, setStartDateReturn] = useState(new Date());
  const [country, setCountry] = useState("india")
  const [currncy, setCurrency] = useState("INR")
  const [departure,setdeparture] = useState("")
  const [returnsDate,setReturnDate] = useState("")
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country_name);
        setCurrency(data.currency)
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  const ChangeFormat = (date) => {
    setStartDateDeparture(date)
    let dateString = date.toString();
    let dateObject = new Date(dateString);

    let day = ("0" + dateObject.getDate()).slice(-2);
    let month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    let year = dateObject.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    setdeparture(formattedDate);
  }

  const ChangeFormatRet = (date) => {
    setStartDateReturn(date)
    let dateString = date.toString();
    let dateObject = new Date(dateString);

    let day = ("0" + dateObject.getDate()).slice(-2);
    let month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    let year = dateObject.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    setReturnDate(formattedDate);
  }


  return (
    <div className="wrapper">
      <div id="mask" className={loading ? 'mask' : 'hide'}>
        <div className={loading ? 'loader' : 'hide'}>

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
          <form onSubmit={(e) => e.preventDefault()} method="post">
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
              <div className="ui-form-grid-row-main-form">
                <div className="ui-form-grid-row">
                  <div className="ui-grid-form-col">
                    <label htmlFor="">Fly From</label>
                    <CustomInput value={setflyfrom} />
                  </div>
                  <div className="ui-grid-form-col">
                    <label htmlFor="">Fly To</label>
                    <CustomInput value={setflyto} />
                  </div>
                </div>
                <div className="ui-form-grid-row">
                  <div className="ui-grid-form-col">
                    <label htmlFor="">Departure</label>
                    <DatePicker
                      selected={StartDateDeparture}
                      onChange={date => ChangeFormat(date)}
                      minDate={new Date()}
                      placeholderText="Select a date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                  <div className="ui-grid-form-col">
                    <label htmlFor="">Return</label>
                    <DatePicker
                      selected={startDateReturn}
                      onChange={date => ChangeFormatRet(date)}
                      minDate={new Date()}
                      placeholderText="Select a date"
                      dateFormat="dd/MM/yyyy"
                      disabled={returns}
                    />
                  </div>
                </div>
                <div className="ui-grid-form-col-lg">
                  <label htmlFor="">Travlers</label>
                  <input type="number" name="travlers" className="travlerCounter" id="travlers" onClick={viewmenue} value={adults + child + infants} readOnly={true} />
                  <div className={showmenue ? "travlers-info-box" : "hide"} id="travlerhtmlFormMain">
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
                            <button type="button" className="btnm-sm" onClick={() => {
                              if (adults > 1) {
                                setadults(adults - 1)
                              }
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                          </div>
                          <div className="ui-passenger-input-box">
                            <input type="number" name="" id="inputAdult" className="valueHolder" value={adults} readOnly={true} disabled={true} />
                          </div>
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={() => setadults(adults + 1)}><FontAwesomeIcon icon={faPlus} /></button>
                          </div>
                        </div>
                      </div>
                      <div className="passenger-ui-grid-row">
                        <div className="ui-passenger-col-icon">
                          Children
                        </div>
                        <div className="ui-passenger-right-col">
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={() => {
                              if (child > 0) {
                                setadults(child - 1)
                              }
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                          </div>
                          <div className="ui-passenger-input-box">
                            <input type="number" name="" id="inputChildern" className="valueHolder" value={child} readOnly={true} disabled={true} />
                          </div>
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={() => setchild(child + 1)}><FontAwesomeIcon icon={faPlus} /></button>
                          </div>
                        </div>
                      </div>
                      <div className="passenger-ui-grid-row">
                        <div className="ui-passenger-col-icon">
                          Infants
                        </div>
                        <div className="ui-passenger-right-col">
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={() => {
                              if (infants > 0) {
                                setadults(infants - 1)
                              }
                            }}><FontAwesomeIcon icon={faMinus} /></button>
                          </div>
                          <div className="ui-passenger-input-box">
                            <input type="number" name="" id="inputInfants" className="valueHolder" value={infants} readOnly={true} disabled={true} />
                          </div>
                          <div className="ui-passenger-col-button">
                            <button type="button" className="btnm-sm" onClick={() => setinfants(infants + 1)}><FontAwesomeIcon icon={faPlus} /></button>
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
                <div className="ui-grid-form-col-lg-btn">
                  <Link href={{
                    pathname: 'results', query: {
                      "from": fly_from,
                      "to": flyto,
                      "type": flighttype,
                      "departure": departure,
                      "return": returnsDate,
                      "child": child,
                      "infant": infants,
                      "adults": adults,
                      "curr": currncy
                    }
                  }}><button id="submitbtn" className="btnsubmit btnm">Search</button></Link>
                </div>
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
                    <h3>Call us 24/7 at <a href="tel:+917027506275">7027506275</a></h3>
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
              <div className="ui-grid-row" style={{ padding: '0' }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
