import React from "react";
import Forecast from "./Forecast";

export default {
  title: "Forecast",
  component: Forecast,
};

const forecastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
  { hour: 6, state: "cloudy", temperature: 18, weekDay: "Viernes" },
  { hour: 12, state: "fog", temperature: 19, weekDay: "Viernes" },
  { hour: 18, state: "rainy", temperature: 17, weekDay: "Viernes" },
  { hour: 6, state: "snowy", temperature: 18, weekDay: "Sábado" },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
