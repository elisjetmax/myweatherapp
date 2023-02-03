import React from "react";
import PropTypes from "prop-types";
import ForecastChart from "../ForecastChart/ForecastChart";

const ForecastChartContainer = ({ forecastChartData }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        Gráfica del Pronóstico extendido
      </div>
      <div className="flex items-center justify-center w-full"> 
          {forecastChartData && <ForecastChart data={forecastChartData} />} 
      </div>
    </>
  );
};

ForecastChartContainer.propTypes = {
  forecastChartData: PropTypes.array.isRequired,
};

export default ForecastChartContainer;
