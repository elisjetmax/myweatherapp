import React, { useState } from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import FormCities from "../FormCities/FormCities";
import Weather from "../Weather";
import { showToast } from "../../utils/toastHandler";
import { addCityToCache, findWeatherByCity } from "../../utils/dataHandler";
import { convertToDefaultFromKelvin } from "../../utils/unitsHandler";
import { LoadingSvg } from "../../utils";
import { useNavigate } from "react-router-dom";
import CityContainer from "../CityContainer/CityContainer";

const CityHander = ({ onSaveAsFavorite }) => {
  const navigate = useNavigate();
  const [countryAndCity, setCountryAndCity] = useState(null);
  const [weatherByCity, setWeatherByCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSelectCountryAndCity = async (country, city) => {
    setLoading(true);
    setCountryAndCity({ country, city });
    const weatherResult = await findWeatherByCity(city.name, country.alpha2);
    const { error, weather: weatherData } = weatherResult;
    setLoading(false);

    if (error) {
      setWeatherByCity(null);
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
    const { city, country } = countryAndCity;
    const cityData = {
      city: city.name,
      alpha2: country.alpha2,
      country: country.name,
    };
    addCityToCache(cityData);
    if (onSaveAsFavorite) onSaveAsFavorite(cityData);
    showToast("Ciudad agregada a favoritos");
  };

  return (
    <>
      <FormCities onSelectCountryAndCity={onSelectCountryAndCity} />
      {countryAndCity && (
        <CityContainer
          countryAndCity={{
            city: countryAndCity.city.name,
            country: countryAndCity.country.name,
            alpha2: countryAndCity.country.alpha2,
          }}
          onSaveAsFavorite={onSaveAsFavorite}
        />
      )}
      {1 === 2 && countryAndCity && (
        <div className="flex flex-col items-center justify-between w-full gap-2 px-4 py-2 bg-slate-700 rounded-xl">
          <div className="flex flex-row w-full gap-2">
            <img
              src="https://api.iconify.design/carbon:earth-filled.svg?color=silver&height=1.7rem"
              alt=""
              className="opacity-70"
            />
            <div className="flex-1">
              <CityInfo
                city={countryAndCity.city.name}
                country={countryAndCity.country.name}
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
                  `/city/${countryAndCity.country.alpha2}/${countryAndCity.city.name}`
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

CityHander.propTypes = {};

export default CityHander;
