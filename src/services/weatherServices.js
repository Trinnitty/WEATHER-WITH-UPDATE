import {apiKeyOpenWeather} from '../keys/keys'
export default function weatherServices (city){
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOpenWeather}`
    );
  
}
