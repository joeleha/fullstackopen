import React, { useState, useEffect } from 'react'
import Countries from './Countries'
import countryService from "./services/countryService";

const Filter = ({ text, value, onChange }) => {
  return (
    <p>
      {text}
      <input value={value} onChange={onChange} />
    </p>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setNewFilter] = useState("");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    countryService.getCountries()
      .then((response) => {
        console.log("promise fulfilled");
        setCountries(response);
      })
  }, []);

  const setFilter = (event) => {
    setNewFilter(event.target.value);
  }

  const updateFilter = (name, capital) => {
    console.log(capital);
    countryService.getWeather(capital).then((response) => {
      console.log(response);
      setWeather({temperature: response.temperature, wind_speed: response.wind_speed, direction: response.wind_dir});
    })
    setNewFilter(`${name}`);
  };

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Countries</h1> 
      <Filter text="find countries " value={filter} onChange={setFilter} />
      <Countries countries={filtered} updateFilter={updateFilter} weather={weather}/>
    </div>
  );
};

export default App;