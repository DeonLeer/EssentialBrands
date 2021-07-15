import React, {useState} from 'react'
import {PieChart} from 'react-minimal-pie-chart'
import terpBottle from '../images/terpxpress.png'
import './Terpene.css'

const terps = [
  'myrcene',	'apinene',	'bcaryophyllene',	'dlimonene',	'bpinene',	'valencene',	'ahumulene', 'linalool',	'abisabolol',	'aterpineol',	'terpinoline',	'ocimene',	'others'	
]

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

export default function Terpene(props) {

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
      <div className="graphics"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
        {isShown ? (
          <PieChart
            data={pieChartData(props.terpene)}
            className="pie-chart"
            label={({ dataEntry }) => `${dataEntry.title}\n ${dataEntry.value}%`}
            labelStyle={(index) => ({
              fontSize: '3.5px',
              fontFamily: 'sans-serif',
            })}
            labelPosition={116}
            radius={22}
            animate
            viewBoxSize={[100,75]}
            center={[50, 40]}
        />
        ) : (
          <div style={{height: '100%'}}>
            <img className="terpene-bottle" src={terpBottle} alt="bottle"/>
            <div className="image-text">{props.terpene.name}</div>
          </div>

        )}
      </div>
      <div className="name-and-price">
        <p className="terpene-name">{props.terpene.name}</p>
        <p className="terpene-price">Starting at ${props.terpene.fiveg}</p>
      </div>

    </div>
  )
}