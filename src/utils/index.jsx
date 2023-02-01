import ForecastItem from "../components/ForecastItem/ForecastItem";
import mainStates from "../data/owMainStates.json";
import moment from "moment";
import { convertToDefaultFromKelvin } from "./unitsHandler";

export const RenderForecastItem = (forecast) => {
  return (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      state={forecast.state}
      temperature={forecast.temperature}
    />
  );
};

export const LoadingSvg = (
  <img
    src="https://api.iconify.design/svg-spinners:gooey-balls-1.svg?color=white&height=22px"
    alt="loading"
    className="opacity-50"
  />
);

export const findStateMainIcon = (stateId) => {
  const main = mainStates.find((x) => x.id === stateId);
  if (main) {
    return main.icon;
  }
  return "clear-day";
};

export const windDirectionsForDegrees = (degrees) => {
  const directions = [
    "↑ N",
    "↗ NE",
    "→ E",
    "↘ SE",
    "↓ S",
    "↙ SO",
    "← O",
    "↖ NO",
  ];
  return directions[Math.round(degrees / 45) % 8];
};

export const generateDataForChart = (forecast) => {
  const { list } = forecast;
  let dates = list.map((x) => x.dt_txt.substring(0, 10));
  dates = [...new Set(dates)].slice(0, 5);

  let data = dates.map((d) => {
    let max = Math.max(
      ...list
        .map((x) => {
          if (x.dt_txt.substring(0, 10) === d) {
            return x;
          }
        })
        .filter((y) => y != undefined)
        .map((o) => o.main.temp_max)
    );
    let min = Math.min(
      ...list
        .map((x) => {
          if (x.dt_txt.substring(0, 10) === d) {
            return x;
          }
        })
        .filter((y) => y != undefined)
        .map((o) => o.main.temp_min)
    );

    let weatherDay = list.find((x) => x.dt_txt === d + " 12:00:00");
    let main = {
      stateId: weatherDay.weather[0].id,
      description: weatherDay.weather[0].description,
      temp: convertToDefaultFromKelvin(weatherDay.main.temp),
      icon: findStateMainIcon(weatherDay.weather[0].id),
    };
    let dayHour = moment(d, "YYYY-MM-DD").format("MMM-D");
    let dayName = moment(d, "YYYY-MM-DD").format("dddd DD/MM");
    min = convertToDefaultFromKelvin(min);
    max = convertToDefaultFromKelvin(max);

    return {
      dayHour,
      min,
      max,
      main,
      dayName,
    };
  });
  console.log("data", data);
  return data;
};
