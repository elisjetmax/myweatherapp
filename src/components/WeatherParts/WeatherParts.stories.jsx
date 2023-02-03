import WeatherParts from "./WeatherParts";

export default {
  title: "WeatherParts",
  component: WeatherParts,
};

const details = {
  wind: {
    speed: 10,
    deg: 90,
  },
  main: {
    humidity: 50,
    pressure: 1060,
  },
  visibility: 1000,
};
export const Muestra = () => <WeatherParts details={details} />;
