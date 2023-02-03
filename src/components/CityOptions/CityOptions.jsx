import React from "react";
import PropTypes from "prop-types";

const CityOptions = ({ onSaveCityAsFavorite }) => {
  return (
    <ol className="flex w-full gap-3 py-2 text-sm border-t first-letter:uppercase border-slate-600  md:border-l md:border-t-0 md:ml-2 md:max-w-[140px]">
      <li
        className="flex flex-row items-center justify-center flex-1 gap-2 cursor-pointer hover:text-cyan-500"
        onClick={onSaveCityAsFavorite}
      >
        <img
          src="https://api.iconify.design/carbon:favorite.svg?color=white&height=20px"
          alt=""
        />
        Favorito
      </li>
    </ol>
  );
};

CityOptions.propTypes = {
  onSaveCityAsFavorite: PropTypes.func.isRequired,
};

export default CityOptions;
