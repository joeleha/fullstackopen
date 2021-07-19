import React from "react";

const Country = ({ country, uf }) => {
  return (
      <>
      <p>{country.name}</p>
      <button onClick={uf} >show</button>
      </>
  );
};

const Forecast = ({ weather }) => {
      return (
        <>
        {console.log(weather)};
        {/*}
        <strong>temperature: {`${weather.temperature} ${weather.wind_speed} ${weather.wind_dir}`}</strong>
      {*/}
        <strong>wind:</strong>
        </>
      )
}

const Details = ({ country, forecast }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) =>
          <li key={language.name}>{language.name}</li>
        )}
      </ul>
      <div>
        <img src={country.flag} />
      </div>
      <h2>{`Weather in ${country.capital}`}</h2>
        <Forecast weather={forecast} />
    </div>
  );
};

const Countries = (props) => {
  const countries = props.countries;
  console.log(countries[0]);
  if (countries.length > 10) {
    return (
      "Too many matches, specify another filter"
    );
  } else if (countries.length === 1) {
    return (
      <Details country={countries[0]}  weather={props.weather} />
    );
  }
  return (
    <div>
      {countries.map((country) =>
      <>
        <Country key={country.name} country={country} uf={() => props.updateFilter(country.name, country.capital)} />
        </>
      )}
    </div>
  );
};

export default Countries;
