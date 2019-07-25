
import React, { PureComponent } from "react";
import SearchWeather from "./SearchWeather";
import DescriptionWeather from "./DescriptionWeather";
import Input from "./Input";
import Details from "./Details";
import Loading from "./Loading";
import WeatherServise from "./WeatherServise";
import searchWeather from '../additionFunc/searchWeather';
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
    historyWeather:{
      "Openweathermap":{},
      "MetaWeather": {}
    }
  };

  componentDidMount = () => {
    const { city } = this.state;
    // if first enter on the app
    if (!city) {
      window.ymaps.ready(()=> 
      this.searchWeatherForCity(window.ymaps.geolocation.city.toUpperCase()) )
    }
  };

  setWeatherServise = weatherServise=>{
    this.setState(() => ({
      weatherServise :  weatherServise
    }))
  };

  searchWeatherForCity = city => {
    this.setState({city:city, isFetching: true})
    const {
      weatherServise,
      historyWeather
    } = this.state;
    if (historyWeather[weatherServise][city] &&  new Date().getHours() - historyWeather[weatherServise][city].lastUpdate <2) {
      this.setState( {weather: historyWeather[weatherServise][city], isFetching: false, error: false})
    }else{
      let weather = searchWeather(city, weatherServise,historyWeather).then((data)=> this.setState({...data}));
    }
  };
  
  render() {
    const { weatherServise, city } = this.state;
    const { weather } = this.state;
    const { isFetching, error } = this.state;
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
        {error ? (
          <div className="errorBlock">
            Correct entered data or reload page and repeat response
          </div>
        ) : (
          <div>
            {(isFetching && <Loading />) || (
              <div>
                <DescriptionWeather  weather={weather} city={city}/>
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
