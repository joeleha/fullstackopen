import axios from "axios";
const countryUrl = "https://restcountries.eu/rest/v2/all";
const forecastUrl = "http://api.weatherstack.com/current";
const api_key = process.env.REACT_APP_API_KEY;

const getCountries = async () => {
  const request = axios.get(countryUrl);
  const response = await request;
  console.log(response);
  return response.data;
};

const getWeather = async (city) => {
  const request = axios.get(`${forecastUrl}?access_key=ff91fa40e4746b7f8b2607db8ea79d01&query=${city}`);
  const response = await request;
  console.log(response);
  return response.data.current;
};

export default { getCountries, getWeather };