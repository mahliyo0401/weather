import React, { useEffect, useState } from 'react'
import s from './Navbar.module.scss'
import { logo, kaplya } from "../../helpers/reExport"
import { useDispatch } from "react-redux"
import { getWeatherCoordinates, toggleTheme } from "../../store/weather/weatherSlice"
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    
    const { t, i18n } = useTranslation()
    const changeLang = () => {
      const newLang = i18n.language == 'ru' ? 'en' : 'ru'
      i18n.changeLanguage(newLang)
    }

    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    
   const submit = (event) => {
    if(event.key == 'Enter' && city.length > 1) {
      dispatch(getWeatherCoordinates(city))
    }
   }
    
    
  return (
    <nav className={s.nav}>
        <a href="#" className={s.logo}>
            <img src={logo} alt="" />
            <span className={s.logo__span}>{t('weather')}</span>
        </a>
        <div className={s.nav__search}>
          <button style={{cursor: 'pointer'}} onClick={() => changeLang()} className={s.nav__lang}>
            {i18n.language == 'ru' ? 'RU' : 'EN'}
            </button>
            <img 
              src={kaplya} 
              alt="" 
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(toggleTheme())}
            />
            <input 
                type="text" 
                className={s.nav__search_input}
                placeholder={t('selectCity')}
                value={city}
                onChange={(event) => setCity(event.target.value)}
                onKeyDown={(event) => submit(event)}
             />
        </div>
    </nav>
  )
}

export default Navbar