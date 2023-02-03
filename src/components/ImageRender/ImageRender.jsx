import React from "react";
import PropTypes from "prop-types";

export const ImageRender = ({ svgName, width, height }) => {
  return (
    <div
      className="svgImageBackground"
      style={{
        backgroundImage: `url("/svgs/${svgName}.svg")`,
        width: width || "2rem",
        height: height || width || "2rem",
      }}
      data-testid="image-render"
    ></div>
  );
};

ImageRender.propTypes = {
  svgName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageRender;
