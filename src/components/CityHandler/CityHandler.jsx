import React, { useState } from "react";
import PropTypes from "prop-types";
import FormCities from "../FormCities/FormCities";
import CityContainer from "../CityContainer/CityContainer";

const CityHander = ({ onSaveAsFavorite }) => {
  const [countryAndCity, setCountryAndCity] = useState(null);

  const onSelectCountryAndCity = (country, city) => {
    setCountryAndCity({ country, city });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 ">
      <FormCities onSelectCountryAndCity={onSelectCountryAndCity} />
      {countryAndCity && (
        <CityContainer
          countryAndCity={{
            city: countryAndCity.city.name,
            alpha2: countryAndCity.country.alpha2,
            country: countryAndCity.country.name,
          }}
          onSaveAsFavorite={onSaveAsFavorite}
        />
      )}
    </div>
  );
};

CityHander.propTypes = {
  onSaveAsFavorite: PropTypes.func.isRequired,
};

export default CityHander;
