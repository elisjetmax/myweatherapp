import initData from "../data/initData";
import allCountries from "../data/allCountries.json";
import {
  getGeoLocationByCountryAndCity,
  getWeatherByCoordinates,
} from "../interfaces/openweathermap";
import { getCookie, setCookie } from "./cookieHandler";
import { convertToDefaultFromKelvin } from "./unitsHandler";
import { findStateMainIcon } from "./";

export const setInitData = () => {
  const citiesCookie = getCookie("cities");
  if (!citiesCookie) setCookie("cities", initData.cities);

  const degreesCookie = getCookie("degreesType");
  if (!degreesCookie) setDegreesTypeOnCache("C");
};

export const getCitiesFromCache = () => {
  const citiesCookie = getCookie("cities");
  if (citiesCookie) {
    return citiesCookie;
  }
  return [];
};

export const addCityToCache = (city) => {
  const citiesCookie = getCookie("cities");
  if (citiesCookie) {
    let cities = [...citiesCookie, city];
    cities = cities.filter(
      (v, i, a) =>
        a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
    );
    setCookie("cities", cities);
  }
};

export const removeCityFromCache = (city) => {
  const citiesCookie = getCookie("cities");
  if (citiesCookie) {
    let cities = citiesCookie.filter(
      (v) => JSON.stringify(v) !== JSON.stringify(city)
    );
    setCookie("cities", cities);
  }
};

export const getDegreesTypeFromCache = () => {
  const degreesType = getCookie("degreesType");
  if (degreesType) {
    return degreesType;
  } else {
    setDegreesTypeOnCache("C");
  }
  return "C";
};

export const setDegreesTypeOnCache = (degreesType) => {
  setCookie("degreesType", degreesType);
};

export const filterCitiesByAlpha2 = (alpha2) => {
  return initData.cities.find((city) => city.alpha2 === alpha2);
};

export const findCountryByAlpha2 = (alpha2) => {
  return allCountries.find(
    (country) => country.alpha2.toLowerCase() === alpha2.toLowerCase()
  );
};

export const findWeatherByCity = async (cityName, countryAlpha2) => {
  try {
    const geoData = await getGeoLocationByCountryAndCity(
      cityName,
      countryAlpha2
    );
    const { error } = geoData;
    if (error) {
      console.log("findWeatherDataByCity error getting GeoData :>> ", error);
      throw error;
    }
    if (geoData.length === 0) {
      const error =
        "No pudimos encontrar información del clima para esta locación.";
      console.log("findWeatherDataByCity error getting GeoData :>> ", error);
      throw error;
    }
    const { lat, lon } = geoData[0];
    const coodinates = { latitude: lat, longitude: lon };
    const weatherData = await getWeatherByCoordinates(coodinates);
    const { error: errorWeather } = weatherData;

    if (errorWeather) {
      console.log(
        "findWeatherDataByCity error getting WeatherData :>> ",
        errorWeather
      );
      throw errorWeather;
    }

    return {
      geo: geoData[0],
      weather: weatherData,
    };
  } catch (error) {
    console.log("findWeatherDataByCity error :>> ", error);
    return { error };
  }
};

export const forecastfor24HoursDataList = (forecastList) => {
  const list = forecastList.map((f) => {
    return {
      dateId: f.dt,
      date: f.dt_txt,
      temp: convertToDefaultFromKelvin(f.main.temp),
      icon: findStateMainIcon(f.weather[0]?.id || 800),
      temp_max: convertToDefaultFromKelvin(f.main.temp_max),
      temp_min: convertToDefaultFromKelvin(f.main.temp_min),
    };
  });
  return list;
};
