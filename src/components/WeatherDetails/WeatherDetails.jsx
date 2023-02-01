import React from "react";
import PropTypes from "prop-types";

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <span className="font-bold">{humidity} %</span>
        <span className="text-sm">Humedad</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold">{wind} km/h</span>
        <span className="text-sm">Viento</span>
      </div>
    </div>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
