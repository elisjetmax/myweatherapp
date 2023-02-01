import React, { useEffect, useState } from "react";
import countries from "../../data/countries.json";
import cities from "../../data/cities.json";

const FormCities = ({ onSelectCountryAndCity }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      if (onSelectCountryAndCity)
        onSelectCountryAndCity(selectedCountry, selectedCity);
    }
  }, [selectedCountry, selectedCity]);

  return (
    <>
      <form noValidate={true} className="flex flex-col gap-2">
        <div>
          <select
            className="w-full"
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
        </div>
        <div>
          <select
            className="w-full"
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
                .filter(
                  (x) => x.country === selectedCountry.alpha2.toUpperCase()
                )
                .map((city) => (
                  <option key={city.code} value={city.code}>
                    {city.name}
                  </option>
                ))}
          </select>
        </div>
      </form>
    </>
  );
};

export default FormCities;
