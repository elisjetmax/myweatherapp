import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import {
  findWeatherByCity,
} from "../../utils/dataHandler";
import { showToast } from "../../utils/toastHandler";
import {
  convertToDefaultFromKelvin,
} from "../../utils/unitsHandler";
import { LoadingSvg } from "../../utils";

const renderCityAndCountry = (eOnClickCity) => (cityAndCountry) => {
  const { city, alpha2, country } = cityAndCountry;
  const [weatherByCity, setWeatherByCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async () => {
    setLoading(true);
    const weatherResult = await findWeatherByCity(city, alpha2);
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

  useEffect(() => {
    if (!weatherByCity) getWeatherData();
  }, []);

  return (
    <li
      key={city}
      className="flex items-center justify-between px-4 py-2 bg-slate-800 rounded-xl bg-opacity-7"
      onClick={(event) => eOnClickCity({ event, cityAndCountry })}
    >
      <img
        src="https://api.iconify.design/carbon:earth-filled.svg?color=gray&height=24px"
        alt=""
        className="opacity-70"
      />
      <div className="flex-1 pl-2">
        <CityInfo city={city} country={country}></CityInfo>
      </div>
      {loading && (
        <div className="flex items-center justify-center pr-1">
          {LoadingSvg}
        </div>
      )}
      {!loading && weatherByCity && (
        <div
          className="flex items-center justify-center"
          title={weatherByCity.stateDescription}
        >
          <Weather
            temperature={weatherByCity.temperature}
            stateId={weatherByCity.stateId}
          />
        </div>
      )}
      <div className="pl-2 border-l border-slate-600">
        <img
          className="delete-btn"
          src="https://api.iconify.design/carbon:trash-can.svg?color=silver&height=20px"
          alt=""
        />
      </div>
    </li>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul className="flex flex-col w-full gap-3">
      {cities &&
        cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(cityAndCountry)
        )}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
