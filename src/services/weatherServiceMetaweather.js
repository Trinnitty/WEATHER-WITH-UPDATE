import {apiKeyMetaWeather} from '../keys/keys'
export default function weatherServiceMetaweather(city){
    return fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKeyMetaWeather}`
    );
}
