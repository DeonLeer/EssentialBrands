import React from 'react'
import terpenesImage from '../images/terpene-stock1.jpeg'
import leafAndBottleImage from '../images/cbd-stock5.jpeg'
import creamAndLeafImage from '../images/cbd-stock3.jpeg'
import "./Home.css"
export default function Home(props) {
  return (
    <div className="Home">
      <div>
        <h1>WELCOME TO ESSENTIAL BRANDS</h1>
      </div>
      <div className="content-boxes">
        <div className="content-box">
          <img className="content-box-image" src={terpenesImage} alt="terpenes"/>
          <div className="content-box-text">Learn About Terpenes</div>
        </div>
        <div className="content-box">
          <img className="content-box-image" src={leafAndBottleImage} alt="where to find us"/>
          <div className="content-box-text">Where To Find Us</div>
        </div>
        <div className="content-box">
          <img className="content-box-image" src={creamAndLeafImage} alt="our products"/>
          <div className="content-box-text">Our Products</div>
        </div>
      </div>

    </div>
  )
}