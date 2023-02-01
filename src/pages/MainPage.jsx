import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CityList from "../components/CityList";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { getCitiesFromCache, removeCityFromCache } from "../utils/dataHandler";
import CityHandler from "../components/CityHandler";
import moment from "moment";

function MainPage() {
  const navigate = useNavigate();
  const [cities, setCities] = useState(null);

  const onClickCity = ({ event, cityAndCountry }) => {
    debugger;
    const element = event.target;
    if (element.classList.contains("delete-btn")) {
      removeCityFromCache(cityAndCountry);
      setCities(null);
      return;
    }
    const { city, country, alpha2 } = cityAndCountry;
    navigate(`/city/${alpha2.toLowerCase()}/${city.toLowerCase()}`);
  };

  useEffect(() => {
    if (!cities) {
      setCities(getCitiesFromCache());
    }
  }, [cities]);

  const refreshCityList = () => {
    debugger;
    setCities(null);
  };

  return (
    <>
      <Layout
        title="Estado del clima"
        subTitle={moment().format("dddd, MMMM Do YYYY")}
        showBackButton={true}
      >
        <div className="flex flex-col w-full gap-6 p-2">
          <CityHandler onSaveAsFavorite={refreshCityList} />
          {cities && <CityList cities={cities} onClickCity={onClickCity} />}
        </div>
      </Layout>
    </>
  );
}

MainPage.propTypes = {};

export default MainPage;
