import React from 'react'
import s from './Daily.module.scss'
import { weatherName } from "../../helpers/getIcon"
import { getDate } from "../../helpers/getDate"
import { useTranslation } from 'react-i18next'

const Day = ({ item, i }) => {

    const { t, i18n } = useTranslation()
    const maxTemp = Math.round(item.temp.max)
    const minTemp = Math.round(item.temp.min)
    const description = item.weather[0].description
    const icon = weatherName[description] ?? weatherName['небольшая облачность']
    
    const weekDay = i == 0 ? t('today') : i == 1 ? t('tomorrow') : getDate(item.dt, 'weekday', i18n.language)
    const month = getDate(item.dt, 'month', i18n.language)
    const monthDay = getDate(item.dt, 'monthDay', i18n.language)

    
    
  return (
   <>
        <div className={s.daily__item}>
            <p className={s.daily__item_day}>{weekDay}</p>
            <p className={s.daily__item_month}>{monthDay} {month}</p>
            <img src={icon} alt="" className={s.daily__item_icon} />
            <p className={s.daily__item_tempMax}>{maxTemp}°</p>
            <p className={s.daily__item_tempMin}>{minTemp}°</p>
            <p className={s.daily__item_description}>{t(description)}</p>
        </div>
   </>
  )
}

export default Day