import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash';

function SearchBox ( {setCities, setSelectedCity}) {
    const [city, setCity] = useState('')
    const debouncedSearch = useRef(_.debounce(searchCities, 100)).current;

    //when user types in search box, use GeoNames API to fetch list of cities that match input
    //debounce technique to limit API calls

    useEffect(() => {
        if (city) {
            debouncedSearch(city);
        }
    }, [city, debouncedSearch])

    function searchCities (city) {
        fetch(`http://api.geonames.org/searchJSON?q=${city}&name_startsWith=${city}&cities=cities5000&maxRows=10&username=${process.env.REACT_APP_GEONAMES_USERNAME}`)
            .then(res => res.json())
            .then(data => {
                setCities(data.geonames)
                console.log(data)
            })
    }

    function handleChange(e) {
        setSelectedCity('')
        setCity(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Enter City Name" value={city} onChange={handleChange} />
        </div>
    )
}

export default SearchBox;