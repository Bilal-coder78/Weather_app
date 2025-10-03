import React, { useEffect, useRef, useState } from 'react'
import "./Weather.css"
import Search_icon from "../assets/search.png"
import Cloud_icon from "../assets/cloud.png"
import Drizzle_icon from "../assets/drizzle.png"
import Rain_icon from "../assets/rain.png"
import Snow_icon from "../assets/snow.png"
import Clear_icon from "../assets/clear.png"
import Humidity_icon from "../assets/humidity.png"
import Wind_icon from "../assets/wind.png"

function Weather() {

  let inputRef = useRef();
  const [weatherdata,setWeatherdata] = useState(false)

  const allIcons = {
    "01d" : Clear_icon,
    "01n" : Clear_icon,
    "02d" : Cloud_icon,
    "02n" : Cloud_icon,
    "03d" : Cloud_icon,
    "03n" : Cloud_icon,
    "04d" : Drizzle_icon,
    "04n" : Drizzle_icon,
    "09d" : Rain_icon,
    "09n" : Rain_icon,
    "10d" : Rain_icon,
    "10n" : Rain_icon,
    "13d" : Snow_icon,
    "13n" : Snow_icon,
  }

  const Search = async(city)=>{
    if(city === ""){
      alert("Enter city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

      const response = await fetch(url);
      const data = await response.json()
      console.log(data)
      const icon = allIcons[data.weather[0].icon] || Clear_icon;
      setWeatherdata({
        humidity : data.main.humidity,
        windSpeed : data.wind.speed,
        temperature : Math.floor(data.main.temp),
        location : data.name,
        icon : icon,
      })
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    Search("Karachi");
  },[])

  return (
    <div className='d-flex flex-column align-items-center p-5 rounded-3 weather'>
        <div className="d-flex align-items-center gap-2 search_bar">
          <input className='border-0 fs-5 rounded-5' ref={inputRef} type="text" name="" placeholder='Search'/>
          <img src={Search_icon} alt="" onClick={()=>Search(inputRef.current.value)}/>
        </div>
        <img src={weatherdata.icon} alt="" className='my-3 weather-icon'/>
        <p className='temperature m-0'>{weatherdata.temperature}ºc</p>
        <p className='fs-1 location m-0'>{weatherdata.location}</p>
        <div className="weather-data w-100 mt-4 d-flex align-items-center justify-content-between text-white">
          <div className="coli d-flex align-items-start justify-content-center">
            <img src={Humidity_icon} alt="" className='mt-1'/>
            <div className='d-flex align-items-center flex-column mx-2'>
            <p className='m-0'>{weatherdata.humidity} %</p>
            <p>Humidity</p>
            </div>
          </div>
          <div className="coli d-flex align-items-start justify-content-center">
            <img src={Wind_icon} alt=""/>
            <div className='d-flex align-items-center flex-column mx-2'>
            <p className='m-0'>{weatherdata.windSpeed} km/h</p>
            <p>Wind Speed</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather