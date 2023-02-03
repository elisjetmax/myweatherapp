import React from "react";
import WeatherDetails from "./WeatherDetails";

export default {
  title: "WeatherDetails",
  component: WeatherDetails,
};

const details = {
  main: {
    temp: 300,
    feels_like: 340,
    temp_min: 200,
    temp_max: 360,
  },
  weather: [{ id: 800 }],
};

export const Muestra = () => <WeatherDetails details={details} />;
