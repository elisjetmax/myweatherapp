import React from "react";
import PropTypes from "prop-types";

const CityInfo = ({ city, country }) => {
  return (
    <div className="flex flex-col py-1 font-russo-one">
      <span>{city}</span>
      <span className="text-sm text-slate-400">{country}</span>
    </div>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
