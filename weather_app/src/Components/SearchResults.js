import React from 'react';
import Select from 'react-select'

function SearchResults({ cities, selectedCity, setSelectedCity }) {
    return (
        <div>
            <Select
                options={cities.map(city => ({ label: city.name, value: city.name }))}
                onChange={e => setSelectedCity(e.value)}
                menuIsOpen={selectedCity ? false : true}
            />
        </div>
    )
}

export default SearchResults;