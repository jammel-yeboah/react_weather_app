import React, { useState, useEffect } from 'react';

function WeatherData({ cities, selectedCity }) {

    const [weatherData, setWeatherData] = useState();
    const city = cities.filter(city => city.name === selectedCity)[0]

    useEffect(() => {
        getWeatherData(city)
    }, [city])

    function getWeatherData(city) {
        if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data)
            })
        }
    }

    function toPascalCase(str) {
        return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        weatherData && (
            <div>
                <h1>Temperature: {((weatherData.main.temp - 273.15) * 9/5 + 32).toFixed(2)} F</h1>
                <h1>{toPascalCase(weatherData.weather[0].description)}</h1>
                <h1>Today's Low: {((weatherData.main.temp_min - 273.15) * 9/5 + 32).toFixed(2)} F</h1>
                <h1>Today's High {((weatherData.main.temp_max - 273.15) * 9/5 + 32).toFixed(2)} F</h1>
                <h1>{(weatherData.wind.speed * 2.23694).toFixed(2)} MPH Wind Speed</h1>
                {weatherData.wind.gust && (<h1>{(weatherData.wind.gust * 2.23694).toFixed(2)} MPH Wind Gusts</h1>)}
                <h1>Feels Like {((weatherData.main.feels_like - 273.15) * 9/5 + 32).toFixed(2)} F</h1>
            </div>
        )
    )
}

export default WeatherData;
