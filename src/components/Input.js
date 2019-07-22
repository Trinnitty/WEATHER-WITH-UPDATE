import React, { Fragment, useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState('');
  const { searchWeatherForCity } = props;

  const handleChange = (event) =>{
    setValue(event.target.value);
  }

  const onButtonClick = () => {
    searchWeatherForCity(value.toUpperCase());
    setValue(' ');
  };

  return (
    <Fragment>
      <input  type="text" placeholder={"Enter city in English"}  value={value} onChange={handleChange}/>
      <button onClick={onButtonClick}>
        find
      </button>
    </Fragment>
  );
}
