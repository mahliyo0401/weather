import React from 'react'
import s from './Curent.module.scss'
import { useSelector } from "react-redux"
import { getTime } from "../../helpers/getTime"
import { weatherName } from "../../helpers/getIcon"
import { davlenie, headerBg, osadki, temp, wind } from "../../helpers/reExport"
import { useTranslation } from 'react-i18next'

const Current = () => {
    
    const { weather } = useSelector((state) => state.weather)
    const time = getTime(weather.timezone)
    const description = weather.current.weather[0].description
    const icon = weatherName[description] ?? weatherName['пасмурно']
   const { t } = useTranslation()
    const items = [
      {
        id:1,
        img: temp,
        text: t('temperature'),
        value: `${Math.round(weather.current.temp)}° - ${t('feels like')} 17°`
      },
      {
        id:2,
        img: davlenie,
        text: t('pressure'),
        value: weather.current.pressure
      },
      {
        id:3,
        img: osadki,
        text: t('clouds'),
        value: weather.current.clouds + '%'
      },
      {
        id:4,
        img: wind,
        text: t('wind'),
        value: `${weather.current.wind_speed} ${t('m_s')}`
      },
    ]
    

    
  return (
    <>
        <div className={s.current}>
            <div className={s.current__left}>
                <p className={s.current__left_degree}>{Math.round(weather.current.temp)}°</p>
                <p className={s.current__left_day}>{t('today')}</p>
                <p className={s.current__left_time}>{t('time')}: {time}</p>
                <p className={s.current__left_city}>{t('city')}: {weather.timezone}</p>
                <img src={icon} alt="" className={s.current__left_img} />
            </div>
            <div className={s.current__right}>
                <img src={headerBg} alt="" className={s.current__right_img} />
                {items.map((item) => (
                  <div className={s.current__right_item} key={item.id}>
                    <div className={s.current__right_item_icon}>
                      <img src={item.img} alt="" />
                    </div>
                    <p className={s.current__right_item_text}>{item.text}</p>
                    <p className={s.current__right_item_value}>{item.value}</p>
                  </div>
                ))}
               
            </div>
        </div>
    </>
  )
}

export default Current