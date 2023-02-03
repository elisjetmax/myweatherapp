import React from "react";
import Weather from "./Weather";

export default {
  title: "Weather",
  component: Weather,
};

export const Muestra = () => <Weather temperature={10} state="sunny"></Weather>;
