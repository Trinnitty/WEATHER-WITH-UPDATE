export default function getWeather (city, weatherServise, servise){
    return servise(city).then((data)=> {
      return {weather: data, isFetching: false, historyWeather: {[weatherServise]:{[city]:data}}};
      }
      )
      .catch((error)=>{
        return {error: true, isFetching: false};
      })
}