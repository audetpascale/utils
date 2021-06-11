import { Input, Label } from "theme-ui";
import { useDispatch } from "react-redux";
import React from "react";
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from "./convertSlice";

const Temperature = ({ convertState }) => {
  const dispatch = useDispatch();
  const changeCelsius = ({ target: { value } }) => {
    dispatch(convertFahrenheitToCelsius(Number(value)));
  };

  const changeFahrenheit = ({ target: { value } }) => {
    dispatch(convertCelsiusToFahrenheit(Number(value)));
  };

  return (
    <div>
      <Label htmlFor="celsius">Celsius</Label>
      <Input
        name="celsius"
        onChange={changeFahrenheit}
        type="number"
        value={convertState.celsius}
      />
      <Label htmlFor="fahrenheit">Fahrenheit</Label>
      <Input
        name="fahrenheit"
        onChange={changeCelsius}
        type="number"
        value={convertState.fahrenheit}
      />
    </div>
  );
};

export default Temperature;
