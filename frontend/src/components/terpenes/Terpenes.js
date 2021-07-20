import React, {useState, useEffect} from 'react'
import Terpene from './Terpene'
import axios from 'axios'
import './Terpenes.css'
export default function Terpenes() {
  const [terpenes, setTerpenes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {axios.get('https://essential-brands-backend.herokuapp.com/api/terpenes')
  .then((response) => {
    setTerpenes(prev => ({
      ...prev,
      terpenes: response.data.terpenes
    }))
    setLoading(false)
  })}, []);

  if (loading) return null
  return (
    <div className='TerpenesMain'>
      <h1 className='TerpenesTitle'>Our Terpenes</h1>
      <div className='TerpenesList'>
        {terpenes.terpenes.map(terpene => {
          return (
            <div className="TerpeneCard">
              <Terpene terpene={terpene}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}