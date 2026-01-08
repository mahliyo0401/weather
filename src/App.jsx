import { useDispatch, useSelector } from "react-redux"
import Current from "./components/Current/Current"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { getWeatherCoordinates, initTheme } from "./store/weather/weatherSlice"
import Daily from "./components/Daily/Daily"
import Loader from "./components/Loader/Loader"

function App() {

  const dispatch = useDispatch()
  const { weather, theme } = useSelector((state) => state.weather)
  
  useEffect(() => {
    dispatch(initTheme())
    dispatch(getWeatherCoordinates('Ташкент'))
  }, [])

  return (
    <>
      <div className={`wrapper ${theme}`}>
        {weather ? 
          <div className="container">
            <Navbar/>
            <Current/>
            <Daily/>
          </div>
        : <Loader/>
        }
      </div>
    </>
  )
}

export default App
