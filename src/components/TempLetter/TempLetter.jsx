import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  getDegreesTypeFromCache,
  setDegreesTypeOnCache,
} from "../../utils/dataHandler";

const TempLetter = () => {
  const navigate = useNavigate();
  const [tempLetter, setTempLetter] = useState(null);

  useEffect(() => {
    if (!tempLetter) setTempLetter(getDegreesTypeFromCache());
  }, []);

  const setTempLetterHandler = (letter) => {
    setDegreesTypeOnCache(letter);
    navigate(0);
  };
  return (
    <>
      <div className="flex-1 md:hidden">Mostrar valores en:</div>
      <div
        className={`temperature-letter ${
          tempLetter === "C" ? "bg-slate-400" : ""
        }`}
        onClick={() => setTempLetterHandler("C")}
      >
        C
      </div>
      <div
        className={`temperature-letter ${
          tempLetter === "F" ? "bg-slate-400" : ""
        }`}
        onClick={() => setTempLetterHandler("F")}
      >
        F
      </div>
    </>
  );
};

TempLetter.propTypes = {};

export default TempLetter;
