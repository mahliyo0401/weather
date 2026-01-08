import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const key = import.meta.env.VITE_API_KEY

const initialState = {
    weather: null,
    theme: 'light'
}

export const getWeatherCoordinates = createAsyncThunk('weatherSlice/getWeatherCoordinates', async(city, { dispatch }) => {
    let { data } = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`)
    dispatch(getWeatherData(data[0]))
})

export const getWeatherData = createAsyncThunk('weatherSlice/getWeatherData',async(info) => {
    let { lat, lon } = info
    let { data } = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric&lang=ru`)
    return data
})



const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        toggleTheme(state) {
            let current = state.theme == 'light' ? 'dark' : 'light'
            state.theme = current
            localStorage.theme = current
        },
        initTheme(state) {
            let value = localStorage.theme
            if(value) {
                state.theme = value
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWeatherData.fulfilled, (state,action) => {
            state.weather = action.payload
        })
    }
})

export const { toggleTheme, initTheme } = weatherSlice.actions

export default weatherSlice.reducer

