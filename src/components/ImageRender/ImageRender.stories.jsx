import React from "react";
import ImageRender from "./ImageRender";

export default {
  title: "ImageRender",
  component: ImageRender,
};

export const MuestraNublado = () => (
  <ImageRender svgName="cloudy" width="4rem" />
);

export const MuestraSoleado = () => (
  <ImageRender svgName="clear-day" width="4rem" />
);
