import React from 'react'
import s from './Daily.module.scss'
import Day from "./Day"
import { useSelector } from "react-redux"

const Daily = () => {
    
    const { daily } = useSelector((state) => state.weather.weather) 
    
    
  return (
    <>
        <div className={s.daily}>
            {daily.map((item,i) => (
                <Day
                    key={item.dt}
                    item={item}
                    i={i}
                />
            ))}
        </div>
    </>
  )
}

export default Daily