import React from "react";
import ForecastItem from "./ForecastItem";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};
const forecastDataItem = [
  {
    dateId: 34534534,
    date: "2023-03-03 18:00:00",
    temp: 30,
    icon: "fog",
    temp_max: 35,
    temp_min: 10,
  },
  {
    dateId: 34534534,
    date: "2023-03-03 09:00:00",
    temp: -4,
    icon: "extreme",
    temp_max: 5,
    temp_min: -10,
  },
];

export const MuestraNublado = () => (
  <ForecastItem forecastDataItem={forecastDataItem[0]} />
);
export const MuestraExtremo = () => (
  <ForecastItem forecastDataItem={forecastDataItem[1]} />
);
