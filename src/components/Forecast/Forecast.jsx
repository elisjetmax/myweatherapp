import React from "react";
import PropTypes from "prop-types";
import { RenderForecastItem } from "../../utils";
import { StateKeysAllowed } from "../ImageState/ImageState";

const Forecast = ({ forecastItemList }) => {
  return (
    <ul className="flex items-start justify-around">
      {forecastItemList.map((forecast) => RenderForecastItem(forecast))}
    </ul>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(StateKeysAllowed).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
