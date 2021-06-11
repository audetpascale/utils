import { createSlice } from "@reduxjs/toolkit";

export const convertSlice = createSlice({
  name: "convert",
  initialState: {
    celsius: 0,
    fahrenheit: 32,
  },
  reducers: {
    convertCelsiusToFahrenheit: (state, payload) => {
      state.celsius = payload.payload;
      state.fahrenheit = (payload.payload * 9) / 5 + 32;
    },
    convertFahrenheitToCelsius: (state, payload) => {
      state.fahrenheit = payload.payload;
      state.celsius = ((payload.payload - 32) * 5) / 9;
    },
  },
});

export const { convertCelsiusToFahrenheit, convertFahrenheitToCelsius } =
  convertSlice.actions;

export default convertSlice.reducer;
