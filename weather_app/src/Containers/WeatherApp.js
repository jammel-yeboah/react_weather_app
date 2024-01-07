import React, { useState } from 'react'
import SearchBox from '../Components/SearchBox'
import SearchResults from '../Components/SearchResults';
import WeatherData from '../Components/WeatherData';

function WeatherApp () {
    const [selectedCity, setSelectedCity] = useState('')
    const [cities, setCities] = useState([]);

    return (
        <div>
            <SearchBox setCities={setCities} setSelectedCity={setSelectedCity}/>
            {
                selectedCity === '' ? (
                    <SearchResults
                        cities={cities}
                        selectedCity={selectedCity}
                        setSelectedCity={setSelectedCity}
                    />
                ) : (
                    <WeatherData cities={cities} selectedCity={selectedCity} />
                )
            }
            </div>
    )
}

export default WeatherApp;