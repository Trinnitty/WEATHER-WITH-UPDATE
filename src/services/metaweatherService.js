export default function metaweatherService(city, storeWeather){
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.REACT_APP_apiKeyMetaWeather}`
    ).then(response => response.json())
    .then(jsonData => {
      console.log(jsonData, "jsonData");
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
      this.setState({ weather: data, storeWeather : {...storeWeather, city:{data} }});
    })
    .catch(error => {
      // this.setState({ error: true});
    });
}
