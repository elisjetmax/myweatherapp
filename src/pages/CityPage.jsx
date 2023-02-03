import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import {
  findWeatherByCity,
  forecastfor24HoursDataList,
} from "../utils/dataHandler";
import { generateDataForChart, LoadingSvg } from "../utils";
import {
  getForecastByCoordinates,
  getForecastbyFiveDaysByCoordinates,
} from "../interfaces/openweathermap";
import moment from "moment/moment";
import "moment/locale/es";

import { showToast } from "../utils/toastHandler";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import WeatherParts from "../components/WeatherParts";
import Forecast24hours from "../components/Forecast24hours/Forecast24hours";
import ForecastChartContainer from "../components/ForecastChartContainer/ForecastChartContainer";
import Forecast5days from "../components/Forecast5days/Forecast5days";

const CityPage = () => {
  const query = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [forecastChartData, setForecastChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async () => {
    try {
      if (weatherData) return;
      setLoading(true);
      const weatherResult = await findWeatherByCity(
        query.city,
        query.countryCode
      );
      setWeatherData(weatherResult);
      const forecastResult = await getForecastByCoordinates({
        latitude: weatherResult.geo.lat,
        longitude: weatherResult.geo.lon,
      });

      const { error: errorForecastResult, list: listofForecast } =
        forecastResult;
      if (errorForecastResult) throw errorForecastResult;
      if (listofForecast)
        setForecastData(forecastfor24HoursDataList(listofForecast));

      const forecastFiveDaysResult = await getForecastbyFiveDaysByCoordinates({
        latitude: weatherResult.geo.lat,
        longitude: weatherResult.geo.lon,
      });
      setLoading(false);
      setForecastChartData(generateDataForChart(forecastFiveDaysResult));
    } catch (error) {
      setLoading(false);
      console.log("Error on CityPage :>> ", error);
      showToast(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <Layout
      title={query.city}
      subTitle={moment().format("dddd, MMMM Do YYYY")}
      showBackButton={true}
    >
      {loading && (
        <div className="flex flex-col items-center justify-center w-full h-[80vh]">
          {LoadingSvg}
        </div>
      )}
      {!loading && weatherData && (
        <div className="flex flex-col items-center w-full gap-4 p-2 text-sm ">
          <div className="citypage-details">
            {weatherData.weather && (
              <WeatherDetails details={weatherData.weather} />
            )}
            {weatherData.weather && (
              <WeatherParts details={weatherData.weather} />
            )}
          </div>
          <div className="forecast-24-container">
            {forecastData && <Forecast24hours forecastData={forecastData} />}
          </div>

          <div className="forecast-chart-container">
            {forecastChartData && (
              <ForecastChartContainer forecastChartData={forecastChartData} />
            )}
          </div>

          <div className="forecast-chart-container">
            {forecastChartData && (
              <Forecast5days forecast5DaysData={forecastChartData} />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

CityPage.propTypes = {};

export default CityPage;
