import React from "react";

export default function DescriptionWeather(props) {
  const { weather } = props;
  return (
    <div className="descrWeather">
      <div>{props.weather.temprature}C</div>
      <div className="descrCity">
        <div>{weather.description}</div>
        <div>{weather.city ? weather.city: ""}</div>
      </div>
    </div>
  );
}
