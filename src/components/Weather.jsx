import React from 'react'
import "./Weather.css"
import Search_icon from "../assets/search.png"
import Clear_icon from "../assets/clear.png"
import Humidity_icon from "../assets/humidity.png"
import Wind_icon from "../assets/wind.png"

function Weather() {
  return (
    <div className='d-flex flex-column align-items-center p-4 rounded-3 weather'>
        <div class="d-flex align-items-center gap-2 search_bar">
          <input className='border-0 fs-5 rounded-5' type="text" name="" placeholder='Search'/>
          <img src={Search_icon} alt=""/>
        </div>
        <img src={Clear_icon} alt="" className='my-3 weather-icon'/>
        <p className='temperature m-0'>16ºc</p>
        <p className='fs-1 location m-0'>London</p>
        <div class="weather-data w-100 mt-4 d-flex align-items-center justify-content-between text-white">
          <div class="coli d-flex align-items-start justify-content-center">
            <img src={Humidity_icon} alt="" className='mt-1'/>
            <div className='d-flex align-items-center flex-column mx-2'>
            <p className='m-0'>91 %</p>
            <p>Humidity</p>
            </div>
          </div>
          <div class="coli d-flex align-items-start justify-content-center">
            <img src={Wind_icon} alt=""/>
            <div className='d-flex align-items-center flex-column mx-2'>
            <p className='m-0'>3.5 km/h</p>
            <p>Wind Speed</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather