import getWeather from '../additionFunc/getWeather';

export default function searchWeather (city,weatherServise,storeWeather){
  console.log(storeWeather, 'storeWeather');
    if (storeWeather[city]) {
        console.log("current city weather excist");
        if (
          new Date().getHours() - storeWeather[city].lastUpdate <2
        ) {
          let cityWeather = storeWeather[city];
          return this.setState({weather : cityWeather});
        } 
    } 
    return getWeather(city, weatherServise,storeWeather);
  }
