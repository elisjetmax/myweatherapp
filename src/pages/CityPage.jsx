import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { ImageRender } from "../components/ImageState/ImageState";
import ForecastChart from "../components/ForecastChart/ForecastChart";
import { useParams } from "react-router-dom";
import { findWeatherByCity } from "../utils/dataHandler";
import {
  findStateMainIcon,
  generateDataForChart,
  LoadingSvg,
  windDirectionsForDegrees,
} from "../utils";
import { convertToDefaultFromKelvin } from "../utils/unitsHandler";
import {
  getForecastByCoordinates,
  getForecastbyFiveDaysByCoordinates,
} from "../interfaces/openweathermap";
import moment from "moment/moment";
import "moment/locale/es";

const CityPage = () => {
  const query = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [forecastChartData, setForecastChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async () => {
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
    setForecastData(forecastResult);
    const forecastFiveDaysResult = await getForecastbyFiveDaysByCoordinates({
      latitude: weatherResult.geo.lat,
      longitude: weatherResult.geo.lon,
    });
    setLoading(false);
    console.log("weatherResult :>> ", weatherResult);
    console.log("forecastResult :>> ", forecastResult);
    console.log("forecastFiveDaysResult :>> ", forecastFiveDaysResult);
    setForecastChartData(generateDataForChart(forecastFiveDaysResult));
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
        <div className="flex flex-col w-full gap-4 p-2 text-sm">
          <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col p-0 m-0 ">
                <span className="text-[5rem] font-russo-one leading-none">
                  {weatherData.weather?.main &&
                    convertToDefaultFromKelvin(weatherData.weather?.main.temp)}
                  °
                </span>
                <span className="-mt-0 text-xs first-letter:uppercase text-slate-400">
                  {weatherData.weather?.weather &&
                    weatherData.weather?.weather.length > 0 &&
                    weatherData.weather?.weather[0].description}
                  <br />
                  Sensación térmica:{" "}
                  {weatherData.weather?.main &&
                    convertToDefaultFromKelvin(
                      weatherData.weather?.main.feels_like
                    )}
                  °
                  <br />
                  Mínima:{" "}
                  {weatherData.weather?.main &&
                    convertToDefaultFromKelvin(
                      weatherData.weather?.main.temp_min
                    )}
                  °
                  <br />
                  Máxima:{" "}
                  {weatherData.weather?.main &&
                    convertToDefaultFromKelvin(
                      weatherData.weather?.main.temp_max
                    )}
                  °
                </span>
              </div>
              <div>
                {weatherData.weather?.weather &&
                  weatherData.weather?.weather.length > 0 && (
                    <ImageRender
                      svgName={findStateMainIcon(
                        weatherData.weather?.weather &&
                          weatherData.weather?.weather.length > 0 &&
                          weatherData.weather?.weather[0].id
                      )}
                      width="13rem"
                    />
                  )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around p-4 bg-opacity-70 bg-slate-800 rounded-xl">
            <div className="flex flex-col items-center">
              <ImageRender svgName="wind" width="3.8rem" />
              <span className="text-xs font-bold">
                {weatherData.weather?.wind &&
                  `${Math.round(
                    weatherData.weather?.wind.speed
                  )} m/s [${windDirectionsForDegrees(
                    weatherData.weather?.wind.deg
                  )}]`}
              </span>
              <span className="text-xs text-slate-400">Viento</span>
            </div>
            <div className="flex flex-col items-center">
              <ImageRender svgName="humidity" width="3.8rem" />
              <span className="text-xs font-bold">
                {weatherData.weather?.main &&
                  weatherData.weather?.main.humidity}
                %
              </span>
              <span className="text-xs text-slate-400">Humedad</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://api.iconify.design/emojione-v1:telescope.svg?width=34px"
                alt=""
                className="py-3"
              />
              <span className="text-xs font-bold">
                {weatherData.weather?.visibility &&
                  weatherData.weather?.visibility / 1000}{" "}
                Km
              </span>
              <span className="text-xs text-slate-400">Visibilidad</span>
            </div>

            <div className="flex flex-col items-center">
              <ImageRender svgName="barometer" width="3.8rem" />
              <span className="text-xs font-bold">
                {weatherData.weather?.main &&
                  weatherData.weather?.main.pressure}{" "}
                hPa
              </span>
              <span className="text-xs text-slate-400">Presión</span>
            </div>
          </div>
          <ol className="flex w-full gap-3">
            <li>Comportamiento las próximas 24 horas</li>
          </ol>
          <div className="flex w-full gap-3 overflow-x-auto overflow-y-hidden text-xs hide-scrollbar">
            {forecastData &&
              forecastData.list.map((forecast) => (
                <div
                  key={forecast.dt}
                  className="flex flex-col items-center justify-center px-4 py-2 bg-slate-800 rounded-xl bg-opacity-70"
                >
                  <span className="text-2xs whitespace-nowrap">
                    {moment(forecast.dt_txt, "YYYY-MM-DD HH:mm:ss").format(
                      "DD/MM | HH"
                    )}
                  </span>
                  {forecast.weather && forecast.weather.length > 0 && (
                    <ImageRender
                      svgName={findStateMainIcon(forecast.weather[0].id)}
                      width="3rem"
                    />
                  )}
                  <span className="text-sm font-bold whitespace-nowrap">
                    {convertToDefaultFromKelvin(forecast.main.temp)}°
                  </span>
                  <div className="flex flex-row items-center justify-center w-full ">
                    <div className="w-full px-1 text-center text-blue-500 ">
                      {convertToDefaultFromKelvin(forecast.main.temp_min)}°
                    </div>
                    <div className="w-full pl-1.5 text-center text-red-500 border-l border-slate-600">
                      {convertToDefaultFromKelvin(forecast.main.temp_max)}°
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-col w-full gap-3">
            Gráfica del Pronóstico extendido
          </div>
          <div className="flex items-center justify-center w-full">
            <div className=" w-[400px]">
              {forecastChartData && <ForecastChart data={forecastChartData} />}
            </div>
          </div>
          <div className="flex flex-col w-full gap-3">Próximos 5 días</div>
          <div className="flex flex-col w-full text-sm ">
            {forecastChartData &&
              forecastChartData.map((day) => (
                <div
                  key={day.dayHour}
                  className="flex items-center justify-between w-full gap-2 border-b border-slate-800"
                >
                  <div className="flex-1 text-slate-400 first-letter:capitalize">
                    {day.dayName}
                  </div>
                  <div className="w-[2.5rem] font-bold">{day.main.temp}°</div>
                  <div className="w-[2.5rem] text-blue-500">{day.min}°</div>
                  <div className="w-[2.5rem] text-red-500">{day.max}°</div>
                  <div className="w-[2.6rem]">
                    <ImageRender svgName={day.main.icon} width="2.5rem" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

CityPage.propTypes = {};

export default CityPage;
