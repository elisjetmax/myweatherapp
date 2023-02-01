import React from "react";
import PropTypes from "prop-types";
import ImageState from "../ImageState";
import { StateKeysAllowed } from "../ImageState/ImageState";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <li
      className="flex flex-col items-center"
      data-testid="forecast-item-container"
    >
      <span className="font-bold">{weekDay}</span>
      <span className="font-thin">{hour}</span>
      <ImageState state={state} size="3rem" />
      <span className="font-bold">{temperature}°</span>
    </li>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(StateKeysAllowed).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
