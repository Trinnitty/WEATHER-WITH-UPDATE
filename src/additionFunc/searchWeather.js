import getWeather from '../additionFunc/getWeather';
import openWeatherServise from '../services/openWeatherServise';
import metaweatherService from '../services/metaweatherService';

export default function searchWeather (city,weatherServise){
  switch (weatherServise) {
    case  "Openweathermap":
      getWeather(city, weatherServise, openWeatherServise)
      break;
    case "MetaWeather":
      getWeather(city, weatherServise, metaweatherService)
      break;
  }
  }
