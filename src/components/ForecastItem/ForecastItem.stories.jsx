import React from "react";
import ForecastItem from "./ForecastItem";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const ForecastLunesNublado = () => (
  <ForecastItem weekDay="Lunes" hour={10} state="cloudy" temperature={23} />
);
