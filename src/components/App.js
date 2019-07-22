import React, { PureComponent } from "react";
import SearchWeather from "./SearchWeather";
import DescriptionWeather from "./DescriptionWeather";
import Input from "./Input";
import Details from "./Details";
import Loading from "./Loading";
import WeatherServise from "./WeatherServise";
import searchWeather from '../additionFunc/searchWeather';
import getWeather from '../additionFunc/getWeather';
import PropTypes from "prop-types";

class App extends PureComponent {
  state = {
    city: '',
    error: false,
    isFetching: false,
    weatherServise: "Openweathermap",
    weather: {
      city: '',
      lastUpdate: "",
      temprature: "",
      humidity: "",
      visibility: "",
      pressure: "",
      description: "",
      wind: ""
    },
    loadedCityWeatherOpenweathermap: {},
    loadedCityWeatherMetaweather: {}
  };

  componentDidMount = () => {
    const { city } = this.state;
    // if first enter on the app
    if (!city) {
      window.ymaps.ready(()=> this.setState(() => ({
        city : window.ymaps.geolocation.city.toUpperCase()
    }),
      this.searchWeatherForCity(window.ymaps.geolocation.city.toUpperCase()) ))
    }
  };

  setWeatherServise = weatherServise=>{
    this.setState(() => ({
      weatherServise :  weatherServise
    }))
  };

  searchWeatherForCity = city => {
    const { weatherServise } = this.state;
    const {
      loadedCityWeatherOpenweathermap,
      loadedCityWeatherMetaweather
    } = this.state;
    console.log(this.state, 'state in searchWeatherForCity');
    let rez;
    if(weatherServise=== "Openweathermap") {
      searchWeather(city,weatherServise,loadedCityWeatherOpenweathermap)
      .then((data)=>this.setState({weather: data}))
    } 
    if(weatherServise=== "MetaWeather") {
      searchWeather(city,weatherServise,loadedCityWeatherMetaweather);
    };
   
  };

  render() {
    const { weatherServise } = this.state;
    const { weather } = this.state;
    const { isFetching, error } = this.state;
  console.log( this.state, ' state')
    return (
      <div
        className={
          new Date().getHours() < 7 || new Date().getHours() > 20
            ? "App night"
            : "App"
        }
      >
        <div className="searchBlock">
          <WeatherServise weatherServise={weatherServise} />
          <Input searchWeatherForCity={this.searchWeatherForCity} />
          <SearchWeather setWeatherServise={this.setWeatherServise} />
        </div>

        {this.state.error && (
          <div className="errorBlock">
            Reload page or try it in another time (may be you are blocked)
          </div>
        )}
        {error ? (
          <div className="errorBlock">
            Correct entered data or reload page and repeat response
          </div>
        ) : (
          <div>
            {(isFetching && <Loading />) || (
              <div>
                <DescriptionWeather  weather={weather} />
                <Details weather={weather} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
