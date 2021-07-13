import React, {useState} from 'react'
import {PieChart} from 'react-minimal-pie-chart'
import terpBottle from '../images/terpxpress.png'
import './Terpenes.css'

const terps = [
  'myrcene',	'aPinene',	'bCaryophyllene',	'dLimonene',	'bPinene',	'valencene',	'aHumulene', 'linalool',	'aBisabolol',	'aTerpineol',	'terpinoline',	'ocimene',	'other'	
]

const terpObj = {
  name: 'ACDC',
  type: 'Hybrid',
  link: 'https://www.leafly.com/strains/acdc',
  THC: 14,
  CBD: 1,
  CBG: 0,
  myrcene: 35,
  aPinene: 35,
  bCaryophyllene: 7,
  dLimonene: 7,
  bPinene: 3,
  valencene: 0,
  aHumulene: 0,
  linalool: 0,
  aBisabolol: 0,
  aTerpineol: 0,
  terpinoline: 0,
  ocimene: 0,
  other: 13,
  price5g: 39,
  price20g: 127,
  price50g: 278,
  price100g: 420,
  price500g: 1899,
  price1000g: 2999  
}

const colors = ['#B96354',
 '#BC605D',
 '#B5617A',
 '#9E6B94',
 '#7778A2',
 '#4682A0',
 '#0E898F',
 '#198B72',
 '#458952',
 '#6A8436',
 '#8C7B28',
 '#A96E30',
 '#BC6249']

export default function Terpenes() {

  const [isShown, setIsShown] = useState(false)

  const pieChartData = function(terpene) {
    let tempData = []
    let i = 0
    for (let terp of terps) {
      if (terpene[terp] > 0) {
        tempData.push({title: terp, value: terpene[terp], color: colors[i]})
      }
      i++
    }
    console.log(tempData)
    return tempData
  }
  return (
    <div className="terpenes">
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
        <img style={isShown ? {display: 'none'} : {display: 'flex'}} className="terpene-bottle" src={terpBottle} alt="bottle"/>
        <PieChart
          style={isShown ? {display: 'flex'} : {display: 'none'}} 
          data={pieChartData(terpObj)}
          className="pie-chart"
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={(index) => ({
            fontSize: '3px',
            fontFamily: 'sans-serif',
          })}
          labelPosition={112}
          radius={30}
          animate
        />
      </div>
      <div className="name-and-price">
        <h1 className="terpene-name">{terpObj.name}</h1>
        <h2 className="terpene-price">${terpObj.price5g}-{terpObj.price1000g}</h2>
      </div>

    </div>
  )
}