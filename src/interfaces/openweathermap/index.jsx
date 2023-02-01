import axios from "axios";

export const getGeoLocationByCountryAndCity = async (
  cityName,
  countryAlpha2
) => {
  try {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryAlpha2}&limit=1&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    const geoResult = await axios.get(url);
    const { data, status } = geoResult;
    if (status === 200) {
      return data;
    } else {
      return {
        error:
          "Lamentablemente, no podemos optener información sobre esta ciudad.",
      };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const getWeatherByCoordinates = async (coordinates) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&lang=es&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    const geoResult = await axios.get(url);
    const { data, status } = geoResult;
    if (status === 200) {
      return data;
    } else {
      return {
        error:
          "Lamentablemente, no podemos optener información sobre esta localidad.",
      };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const getForecastByCoordinates = async (coordinates) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&lang=es&cnt=7&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    const forecastResult = await axios.get(url);
    const { data, status } = forecastResult;
    if (status === 200) {
      return data;
    } else {
      return {
        error:
          "Lamentablemente, no podemos optener información sobre esta localidad.",
      };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const getForecastbyFiveDaysByCoordinates = async (coordinates) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&lang=es&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    const forecastResult = await axios.get(url);
    const { data, status } = forecastResult;
    if (status === 200) {
      return data;
    } else {
      return {
        error:
          "Lamentablemente, no podemos optener información sobre esta localidad.",
      };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export const getGeoLocationByCoordinates = async (coordinates) => {
  try {
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&limit=1&lang=es&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    const geoResult = await axios.get(url);
    const { data, status } = geoResult;
    if (status === 200) {
      return data;
    } else {
      return {
        error:
          "Lamentablemente, no podemos optener información sobre esta localidad.",
      };
    }
  } catch (error) {
    return { error: error.message };
  }
};
