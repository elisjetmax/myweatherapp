import React from "react";
import PropTypes from "prop-types";
import { convertToDefaultFromKelvin } from "../../utils/unitsHandler";
import ImageRender from "../ImageRender";
import { findStateMainIcon } from "../../utils";

const WeatherDetails = ({ details }) => {
  return (
    <div className="weather-details">
      <div className="flex flex-col pl-4">
        <span className="text-[5rem] font-russo-one leading-none">
          {details.main && convertToDefaultFromKelvin(details.main.temp)}°
        </span>
        <span className="-mt-0 text-xs first-letter:uppercase text-slate-400">
          {details.weather &&
            details.weather.length > 0 &&
            details.weather[0].description}
          <br />
          Sensación térmica:{" "}
          {details.main && convertToDefaultFromKelvin(details.main.feels_like)}
          °
          <br />
          Mínima:{" "}
          {details.main && convertToDefaultFromKelvin(details.main.temp_min)}
          °
          <br />
          Máxima:{" "}
          {details.main && convertToDefaultFromKelvin(details.main.temp_max)}°
        </span>
      </div>
      <ImageRender
        svgName={findStateMainIcon(
          details.weather && details.weather.length > 0 && details.weather[0].id
        )}
        width="10rem"
      />
    </div>
  );
};

WeatherDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

export default WeatherDetails;
