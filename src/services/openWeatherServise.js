import {apiKeyOpenWeather} from '../keys/keys';

export default function openWeatherServise(city,storeWeather){
  console.log(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOpenWeather}`, 'link to openweather')
  return fetch(`https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOpenWeather}`
    ).then(response => response.json())
    .then(jsonData => {
      let response = {
        city: city,
        lastUpdate: new Date().getHours(),
        temprature: jsonData.main.temp,
        humidity: jsonData.main.humidity,
        visibility: jsonData.visibility,
        pressure: jsonData.main.pressure,
        description: jsonData.weather[0].main,
        wind: jsonData.wind.speed
      };
      console.log(response, 'response ')
      return response;
    })
    .catch(error => {
      return error;
    });
}
