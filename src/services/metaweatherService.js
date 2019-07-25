import {apiKeyMetaWeather} from '../keys/keys'

export default function metaweatherService(city, weatherServise,historyWeather){
  console.log(process.env.REACT_APP_apiKeyMetaWeather);
    return fetch(
      `http://api.weatherbit.io/v2.0/current?city=${city}&key=apiKeyMetaWeather`
    ).then(response => response.json())
    .then(jsonData => {
      let data = jsonData.data[0];
      let responce = {
        city: city,
        lastUpdate: new Date().getHours(),
        temprature: data.temp,
        humidity: data.rh,
        visibility: data.vis * 1000,
        pressure: data.pres.toFixed(1),
        description: data.weather.description,
        wind: data.wind_spd.toFixed(0)
      };
      return responce;
    })
    .then(data => {
      return {weather: data, isFetching: false, error: false,historyWeather: {...historyWeather,[weatherServise]:{[city]:data}}};
    }
    )
    .catch(error => {
      return {error: true, isFetching: false};
    });
}
