import ForecastChartContainer from "./ForecastChartContainer";

export default {
  title: "ForecastChartContainer",
  component: ForecastChartContainer,
};

const dataChart = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];
export const Muestra = () => (
  <ForecastChartContainer forecastChartData={dataChart} />
);
