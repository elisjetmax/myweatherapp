import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { useNavigate } from "react-router-dom";
import { addCityToCache, findWeatherByCity } from "../../utils/dataHandler";
import { showToast } from "../../utils/toastHandler";
import { convertToDefaultFromKelvin } from "../../utils/unitsHandler";
import { LoadingSvg } from "../../utils";

const CityContainer = ({ countryAndCity, onSaveAsFavorite }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [weatherByCity, setWeatherByCity] = useState(null);

  const getWeatherData = async () => {
    setLoading(true);
    const weatherResult = await findWeatherByCity(
      countryAndCity.city,
      countryAndCity.alpha2
    );
    setLoading(false);
    const { error, weather: weatherData } = weatherResult;

    if (error) {
      showToast(error);
      return;
    }
    //debugger;
    const { main, weather } = weatherData;
    const temperature = convertToDefaultFromKelvin(main.temp);
    const stateId = weather[0].id;
    const stateDescription = weather[0].description;

    setWeatherByCity({
      temperature,
      stateId,
      stateDescription,
    });
  };

  const saveCityAsFavorite = () => {
    if (!countryAndCity) return;
    addCityToCache(countryAndCity);
    showToast("Ciudad agregada a favoritos");
    if (onSaveAsFavorite) onSaveAsFavorite();
  };

  useEffect(() => {
    if (!weatherByCity && countryAndCity) getWeatherData();
  }, []);
  return (
    <>
      {countryAndCity && (
        <div className="flex flex-col items-center justify-between w-full gap-2 px-4 py-2 bg-slate-700 rounded-xl">
          <div className="flex flex-row w-full gap-2">
            <img
              src="https://api.iconify.design/carbon:earth-filled.svg?color=silver&height=1.7rem"
              alt=""
              className="opacity-70"
            />
            <div className="flex-1">
              <CityInfo
                city={countryAndCity.city}
                country={countryAndCity.country}
              />
            </div>
            {loading && LoadingSvg}
            {!loading && weatherByCity && (
              <div
                className="flex items-center justify-center "
                title={weatherByCity.stateDescription}
              >
                <Weather
                  temperature={weatherByCity.temperature}
                  stateId={weatherByCity.stateId}
                />
              </div>
            )}
          </div>

          <div className="w-full -mt-5 text-xs leading-tight text-right">
            &nbsp; {!loading && weatherByCity && weatherByCity.stateDescription}
          </div>

          <ol className="flex justify-between w-full gap-3 py-2 text-sm border-t first-letter:uppercase border-slate-600">
            <li
              className="flex flex-row items-center justify-center flex-1 gap-2 cursor-pointer"
              onClick={saveCityAsFavorite}
            >
              <img
                src="https://api.iconify.design/carbon:favorite.svg?color=white&height=20px"
                alt=""
              />
              Favorito
            </li>
            <li
              className="flex flex-row items-center justify-center flex-1 gap-2"
              onClick={() => {
                navigate(
                  `/city/${countryAndCity.alpha2}/${countryAndCity.city}`
                );
              }}
            >
              <img
                src="https://api.iconify.design/carbon:information-square.svg?color=white&height=20px"
                alt=""
              />
              Más Info
            </li>
          </ol>
        </div>
      )}
    </>
  );
};

CityContainer.propTypes = {};

export default CityContainer;
