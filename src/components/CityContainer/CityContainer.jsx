import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { useNavigate } from "react-router-dom";
import { addCityToCache, findWeatherByCity } from "../../utils/dataHandler";
import { showToast } from "../../utils/toastHandler";
import { convertToDefaultFromKelvin } from "../../utils/unitsHandler";
import { LoadingSvg } from "../../utils";
import CityOptions from "../CityOptions";

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
    if (countryAndCity) getWeatherData();
  }, [countryAndCity]);
  return (
    <>
      {countryAndCity && (
        <div className="city-container">
          <div
            className="flex flex-col items-center justify-between w-full gap-2 cursor-pointer"
            onClick={() => {
              navigate(
                `/city/${countryAndCity.alpha2?.toLowerCase()}/${countryAndCity.city?.toLowerCase()}`
              );
            }}
          >
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

            <div className="w-full -mt-5 text-xs leading-tight text-right first-letter:capitalize">
              &nbsp;
              {!loading && weatherByCity && weatherByCity.stateDescription}
            </div>
          </div>
          <CityOptions onSaveCityAsFavorite={saveCityAsFavorite} />
        </div>
      )}
    </>
  );
};

CityContainer.propTypes = {
  countryAndCity: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    alpha2: PropTypes.string.isRequired,
  }).isRequired,
  onSaveAsFavorite: PropTypes.func.isRequired,
};

export default CityContainer;
