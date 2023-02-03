import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "../ForecastItem";

const Forecast = ({ forecastItemList }) => {
  return (
    <ol
      className="forecast-24-container-items"
      data-testid="forecast-item-container"
    >
      {forecastItemList.map((forecastDataItem) => (
        <ForecastItem
          key={forecastDataItem.dateId}
          forecastDataItem={forecastDataItem}
        />
      ))}
    </ol>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      dateId: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
