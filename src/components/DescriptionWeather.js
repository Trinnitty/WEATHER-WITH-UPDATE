import React from "react";

export default function DescriptionWeather(props) {
  const { weather, city } = props;
  return (
    <div className="descrWeather">
      <div>{weather.temprature ? weather.temprature: ""}C</div>
      <div className="descrCity">
        <div>{weather.description}</div>
        <div>{city ? city: ""}</div>
      </div>
    </div>
  );
}
