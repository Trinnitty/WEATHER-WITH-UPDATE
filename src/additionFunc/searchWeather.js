
import openWeatherServise from '../services/openWeatherServise';
import metaweatherService from '../services/metaweatherService';

export default function searchWeather (city,weatherServise,historyWeather){
  switch (weatherServise) {
    case  "Openweathermap":
     return openWeatherServise(city,weatherServise,historyWeather);
    case "MetaWeather":
      return metaweatherService(city,weatherServise,historyWeather);
  }
  }
