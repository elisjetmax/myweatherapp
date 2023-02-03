import React from "react";
import PropTypes from "prop-types";
import Forecast from "../Forecast/Forecast";

const Forecast24hours = ({ forecastData }) => {
  return (
    <>
      <div className="flex w-full gap-3">
        Comportamiento las próximas 24 horas
      </div>
      {forecastData && <Forecast forecastItemList={forecastData} />}
    </>
  );
};

Forecast24hours.propTypes = {
  forecastData: PropTypes.array.isRequired,
};

export default Forecast24hours;
