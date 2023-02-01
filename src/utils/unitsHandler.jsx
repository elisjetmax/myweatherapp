import convert from "convert-units";
import { getDegreesTypeFromCache } from "./dataHandler";

export const convertUnits = (value, from, to) => {
  return Math.round(convert(value).from(from).to(to));
};

export const convertToDefaultFromKelvin = (value) => {
  return Math.round(convert(value).from("K").to(getDegreesTypeFromCache()));
};
