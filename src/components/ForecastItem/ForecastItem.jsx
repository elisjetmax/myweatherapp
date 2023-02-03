import React from "react";
import PropTypes from "prop-types";
import ImageRender from "../ImageRender";
import moment from "moment";

const ForecastItem = ({ forecastDataItem }) => {
  return (
    <li className="forecast-24-item">
      <span className="text-2xs whitespace-nowrap">
        {moment(forecastDataItem.date, "YYYY-MM-DD HH:mm:ss").format(
          "DD/MM | HH"
        )}
      </span>
      <ImageRender svgName={forecastDataItem.icon} width="3rem" />
      <span
        className="text-sm font-bold whitespace-nowrap "
        data-testid="temp-value"
      >
        {forecastDataItem.temp}°
      </span>
      <div className="flex flex-row items-center justify-center w-full ">
        <div
          className="w-full px-1 text-center text-blue-500"
          data-testid="temp-min-value"
        >
          {forecastDataItem.temp_min}°
        </div>
        <div
          className="w-full pl-1.5 text-center text-red-500 border-l border-slate-600"
          data-testid="temp-max-value"
        >
          {forecastDataItem.temp_max}°
        </div>
      </div>
    </li>
  );
};

ForecastItem.propTypes = {
  forecastDataItem: PropTypes.shape({
    dateId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastItem;
