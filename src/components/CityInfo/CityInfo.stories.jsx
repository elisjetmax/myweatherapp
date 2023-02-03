import React from "react";
import CityInfo from "./CityInfo";

export default {
  title: "CityInfo",
  component: CityInfo,
};

export const MuestraArgentina = () => (
  <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>
);

export const MuestraVenezuela = () => (
  <CityInfo city={"Caracas"} country={"Venezuela"}></CityInfo>
);
