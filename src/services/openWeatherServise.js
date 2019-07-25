import {apiKeyOpenWeather} from '../keys/keys';

export default function openWeatherServise(city, weatherServise,historyWeather){
  return fetch(`http://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOpenWeather}`)
    .then(response => response.json())
    .then(jsonData => {
      let response = {
        lastUpdate: new Date().getHours(),
        temprature: jsonData.main.temp,
        humidity: jsonData.main.humidity,
        visibility: jsonData.visibility,
        pressure: jsonData.main.pressure,
        description: jsonData.weather[0].main,
        wind: jsonData.wind.speed
      };
      return response;
    }).then((data)=> {
      return {weather: data, isFetching: false,error: false, historyWeather: {...historyWeather,[weatherServise]:{[city]:data}}};
      }
      )
      .catch((error)=>{
        return {error: true, isFetching: false};
      })
}
