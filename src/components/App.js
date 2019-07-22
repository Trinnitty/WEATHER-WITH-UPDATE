import React, { PureComponent } from "react";
import setPrevWeather from "../actions/prevWeatherAction";
import SearchWeather from "./SearchWeather";
import DescriptionWeather from "./DescriptionWeather";
import Input from "./Input";
import Details from "./Details";
import Loading from "./Loading";
import WeatherServise from "./WeatherServise";
import { connect } from "react-redux";
import { getWeather } from "../actions/weatherAction";
import { setWeatherServise } from "../actions/weatherServiseAction";
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
    },
      this.searchWeatherForCity(window.ymaps.geolocation.city.toUpperCase()) )))
    }
  };

  setWeatherServise = weatherServise=>{
    this.setState(() => ({
      weatherServise :  weatherServise
    }))
  };

  searchWeatherForCity = city => {
    const { weatherServise } = this.props.weatherServise;
    const {
      setWeatherAction,
      prevWeatherAction,
      loadedCityWeatherOpenweathermap,
      loadedCityWeatherMetaweather
    } = this.props;
   if(this.state.error){
    this.setState({ error: false });
   }
    if (weatherServise === "Openweathermap") {
      if (loadedCityWeatherOpenweathermap[city]) {
        console.log("current city weather excist");
        if (
          new Date().getHours() -
            loadedCityWeatherOpenweathermap[city].lastUpdate <
          2
        ) {
          let cityWeather = loadedCityWeatherOpenweathermap[city];
          prevWeatherAction(cityWeather);
        } else {
          setWeatherAction(city, weatherServise);
        }
      } else {
        setWeatherAction(city, weatherServise);
      }
    }
    if (weatherServise === "MetaWeather") {
      if (loadedCityWeatherMetaweather[city]) {
        console.log("current city weather excist");
        if (
          new Date().getHours() -
            loadedCityWeatherMetaweather[city].lastUpdate <
          2
        ) {
          let cityWeather = loadedCityWeatherMetaweather[city];
          prevWeatherAction(cityWeather);
        } else {
          setWeatherAction(city, weatherServise);
        }
      } else {
        setWeatherAction(city, weatherServise);
      }
    }
  };

  render() {
    const { weatherServise } = this.state;
    const { weather } = this.props.weather;
    const { isFetching, error } = this.props.weather;
  console.log( weatherServise, ' weatherServise state')
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

App.propTypes = {
  weatherServise: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  console.log(store, "store");
  return {
    weatherServise: store.weatherServise,
    weather: store.weather,
    loadedCityWeatherOpenweathermap: store.loadedCityWeatherOpenweathermap,
    loadedCityWeatherMetaweather: store.loadedCityWeatherMetaweather
  };
};
const mapDispatchToProps = dispatch => {
  return {
    prevWeatherAction: weather => dispatch(setPrevWeather(weather)),
    setWeatherServiseAction: servise => dispatch(setWeatherServise(servise)),
    setWeatherAction: (weather, weatherServise) =>
      dispatch(getWeather(weather, weatherServise))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
