import openWeatherServise from '../services/openWeatherServise';
import metaweatherService from '../services/metaweatherService';

export default function getWeather (city, weatherServise, storeWeather){
    // this.setState({ isFetching: true});
    if (weatherServise === "Openweathermap") {
       return  openWeatherServise(city);
    }
    if (weatherServise === "MetaWeather") {
        return  metaweatherService(city,storeWeather);
    }
   
}