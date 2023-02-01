import React from "react";
import PropTypes from "prop-types";

export const StateKeysAllowed = [
  "sunny",
  "cloudy",
  "fog",
  "rainy",
  "snowy",
  "windy",
];
export const StateByName = {
  sunny: "clear-day",
  cloudy: "cloudy",
  fog: "fog",
  rainy: "rain",
  snowy: "snow",
  windy: "wind",
};

export const RenderIconState = (state) => {
  return StateByName[state] ? StateByName[state] : null;
};

const ImageState = ({ state, width, height }) => {
  return (
    <div
      className="svgImageBackground"
      style={{
        backgroundImage: `url("/svgs/${RenderIconState(state)}.svg")`,
        width: width || "2rem",
        height: height || width || "2rem",
      }}
    ></div>
  );
};
export const ImageRender = ({ svgName, width, height }) => {
  return (
    <div
      className="svgImageBackground"
      style={{
        backgroundImage: `url("/svgs/${svgName}.svg")`,
        width: width || "2rem",
        height: height || width || "2rem",
      }}
    ></div>
  );
};

ImageState.propTypes = {
  state: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageState;
