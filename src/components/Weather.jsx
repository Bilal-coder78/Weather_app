import React from 'react'
import "./Weather.css"
import Search_icon from "../assets/search.png"

function Weather() {
  return (
    <div className='d-flex flex-column align-items-center p-5 rounded-3 bg-primary weather'>
        <div class="d-flex align-items-center gap-2 search_bar">
          <input className='border-0 fs-5 rounded-5' type="text" name="" placeholder='Search'/>
          <img src={Search_icon} alt=""/>
        </div>
    </div>
  )
}

export default Weather