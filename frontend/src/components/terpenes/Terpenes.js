import React from 'react'
import Terpene from './Terpene'
import './Terpenes.css'
export default function Terpenes(props) {

  return (
    <div className='TerpenesMain'>
      <h1 className='TerpenesTitle'>Our Terpenes</h1>
      <div className='TerpenesList'>
        {props.terpenes.terpenes.map(terpene => {
          return (
            <div className="TerpeneCard">
              <Terpene
                terpene={terpene}
                addProduct={props.addProduct}  
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}