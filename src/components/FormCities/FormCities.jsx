import React, { useEffect, useState } from "react";
import countries from "../../data/countries.json";
import cities from "../../data/cities.json";
import PropTypes from "prop-types";

const FormCities = ({ onSelectCountryAndCity }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (selectedCountry && selectedCity && onSelectCountryAndCity) {
      onSelectCountryAndCity(selectedCountry, selectedCity);
      setSelectedCity(null);
    }
  }, [selectedCountry, selectedCity, onSelectCountryAndCity]);

  return (
    <>
      <form
        noValidate={true}
        className="flex flex-col items-center w-full gap-2 mt-3"
      >
        <div className="w-full md:w-3/5">Buscar ciudad</div>
        <select
          className="w-full md:w-3/5"
          onChange={(e) => {
            setSelectedCountry(
              countries.find((x) => x.alpha2 === e.target.value)
            );
            setSelectedCity(null);
          }}
          defaultValue=""
        >
          <option value="">Seleccione un país</option>
          {countries &&
            countries.map((country) => (
              <option key={country.id} value={country.alpha2}>
                {country.name}
              </option>
            ))}
        </select>
        <select
          className="w-full md:w-3/5"
          onChange={(e) =>
            setSelectedCity(cities.find((x) => x.code === e.target.value))
          }
          defaultValue=""
        >
          <option value="">Seleccione una ciudad</option>
          {selectedCountry &&
            selectedCountry !== "" &&
            cities &&
            cities
              .filter((x) => x.country === selectedCountry.alpha2.toUpperCase())
              .map((city) => (
                <option key={city.code} value={city.code}>
                  {city.name}
                </option>
              ))}
        </select>
      </form>
    </>
  );
};

FormCities.propTypes = {
  onSelectCountryAndCity: PropTypes.func.isRequired,
};

export default FormCities;
