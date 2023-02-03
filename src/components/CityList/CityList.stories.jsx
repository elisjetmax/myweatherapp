import { action } from "@storybook/addon-actions";
import React from "react";
import CityList from "./CityList";

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Caracas", country: "Venezuela" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Ciudad de México", country: "México" },
  { city: "Madrid", country: "España" },
  { city: "Lima", country: "Perú" },
];
export const Muestra = () => (
  <CityList cities={cities} onClickCity={action("Click en city")} />
);
