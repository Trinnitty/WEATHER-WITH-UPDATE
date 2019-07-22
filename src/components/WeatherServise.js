import React from "react";

export default function WeatherServise(props) {
  const { weatherServise } = props;
console.log(weatherServise, 'weatherServise in weatherServise')
  return (
    <div className="weatherServise">
      <div>{weatherServise} servise </div>
    </div>
  );
}
