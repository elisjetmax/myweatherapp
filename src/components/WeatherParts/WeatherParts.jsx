import React from "react";
import PropTypes from "prop-types";
import ImageRender from "../ImageRender";
import { windDirectionsForDegrees } from "../../utils";

const WeatherParts = ({ details }) => {
  return (
    <div className="weather-parts">
      <div className="parts">
        <div className="flex flex-col items-center">
          <ImageRender svgName="wind" width="3.8rem" />
          <span className="text-xs font-bold whitespace-nowrap">
            {details.wind &&
              `${Math.round(
                details.wind.speed
              )} m/s [${windDirectionsForDegrees(details.wind.deg)}]`}
          </span>
          <span className="text-xs text-slate-400">Viento</span>
        </div>
        <div className="flex flex-col items-center">
          <ImageRender svgName="humidity" width="3.8rem" />
          <span className="text-xs font-bold whitespace-nowrap">
            {details.main && details.main.humidity}%
          </span>
          <span className="text-xs text-slate-400">Humedad</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://api.iconify.design/emojione-v1:telescope.svg?width=34px"
            alt=""
            className="py-3"
          />
          <span
            className="text-xs font-bold whitespace-nowrap"
            data-testid="weather-part-visibility"
          >
            {details.visibility && details.visibility / 1000} Km
          </span>
          <span className="text-xs text-slate-400">Visibilidad</span>
        </div>

        <div className="flex flex-col items-center">
          <ImageRender svgName="barometer" width="3.8rem" />
          <span className="text-xs font-bold whitespace-nowrap">
            {details.main && details.main.pressure} hPa
          </span>
          <span className="text-xs text-slate-400">Presión</span>
        </div>
      </div>
    </div>
  );
};

WeatherParts.propTypes = {
  details: PropTypes.object.isRequired,
};

export default WeatherParts;
