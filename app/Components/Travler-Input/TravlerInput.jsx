"use client"
import React, { useState } from 'react'

const TravlerInput = (props) => {
  return (
    <div>
      <div className="popup">
        <div className="flex-box">
          <div className="travler-type">
            <div className="trvaler-logo">
              <img src="" alt="" />
            </div>
            <div className="travler-input">
              <button type="button" className="add" onClick={()=>props.adultfun(props.adultCount+1)}>+</button>
              <input type="number" name="adult" id="adult" value={props.adultCount} min={'0'} readOnly onChange={()=>{return 0}}/>
              <button type="button" className="add" onClick={()=>props.adultfun(props.adultCount-1)}>-</button>
            </div>
          </div>
        </div>
        <div className="flex-box">
          <div className="travler-type">
            <div className="trvaler-logo">
              <img src="" alt="" />
            </div>
            <div className="travler-input">
            <button type="button" className="add" onClick={()=>props.childfun(props.childCount+1)}>+</button>
              <input type="number" name="child" id="child" min={'0'} value={props.childCount} onChange={()=>{return 0}}/>
              <button type="button" className="add" onClick={()=>props.childfun(props.childCount-1)}>-</button>
            </div>
          </div>
        </div>
        <div className="flex-box">
          <div className="travler-type">
            <div className="trvaler-logo">
              <img src="" alt="" />
            </div>
            <div className="travler-input">
            <button type="button" className="add" onClick={()=>props.infantfun(props.infantCount+1)}>+</button>
              <input type="number" name="infant" id="infant" min={'0'} value={props.infantCount} onChange={()=>{return 0}}/>
              <button type="button" className="add" onClick={()=>props.infantfun(props.infantCount-1)}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravlerInput