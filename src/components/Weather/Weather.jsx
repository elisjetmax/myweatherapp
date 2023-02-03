import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import mainStates from "../../data/owMainStates.json";
import ImageRender from "../ImageRender";
const Weather = ({ temperature, stateId }) => {
  const [stateMainIcon, setStateMainIcon] = useState(null);

  const findStateMainIcon = () => {
    const main = mainStates.find((x) => x.id === stateId);
    if (main) {
      setStateMainIcon(main.icon);
    }
  };
  useEffect(() => {
    findStateMainIcon();
  });

  return (
    <div className="flex flex-row items-center justify-end gap-1  -mt-[5px]">
      {stateMainIcon && <ImageRender svgName={stateMainIcon} size="2.4rem" />}
      <h2 className="font-bold">{temperature}°</h2>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  stateId: PropTypes.number.isRequired,
};
Weather.defaultProps = {
  temperature: 0,
  state: 0,
};

export default Weather;
