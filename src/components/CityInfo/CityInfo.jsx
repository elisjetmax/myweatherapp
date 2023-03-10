import React from "react";
import PropTypes from "prop-types";

const CityInfo = ({ city, country }) => {
  return (
    <div className="flex flex-col py-1 font-russo-one">
      <div>{city}</div>
      <div className="text-sm text-slate-400">{country}</div>
    </div>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
