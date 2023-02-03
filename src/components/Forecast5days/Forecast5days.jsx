import React from "react";
import PropTypes from "prop-types";
import ImageRender from "../ImageRender";

const Forecast5days = ({ forecast5DaysData }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        Pronósticos para los próximos 5 días
      </div>
      <div className="flex flex-col w-full text-sm ">
        {forecast5DaysData.map((day) => (
          <div
            key={day.dayHour}
            className="flex items-center justify-between w-full gap-2 border-b border-slate-800"
          >
            <div className="flex-1 text-slate-400 first-letter:capitalize">
              {day.dayName}
            </div>
            <div className="w-[2.5rem] font-bold">{day.main.temp}°</div>
            <div className="w-[2.5rem] text-blue-500">{day.min}°</div>
            <div className="w-[2.5rem] text-red-500">{day.max}°</div>
            <div className="w-[2.6rem]">
              <ImageRender svgName={day.main.icon} width="2.5rem" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Forecast5days.propTypes = {
  forecast5DaysData: PropTypes.array.isRequired,
};

export default Forecast5days;
