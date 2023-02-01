import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  addCityToCache,
  findCountryByAlpha2,
  findWeatherByCity,
} from "../utils/dataHandler";
import { getGeoLocationByCoordinates } from "../interfaces/openweathermap";
import CityInfo from "../components/CityInfo";
import { showToast } from "../utils/toastHandler";
import { LoadingSvg } from "../utils";
import { convertToDefaultFromKelvin } from "../utils/unitsHandler";
import Weather from "../components/Weather";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import CityContainer from "../components/CityContainer/CityContainer";
import { ImageRender } from "../components/ImageState";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [localCountryAndCity, setLocalCountryAndCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherByCity, setWeatherByCity] = useState(null);
  const [geolocationDenied, setGeolocationDenied] = useState(false);

  const loadGeoData = () => {
    try {
      setLoading(true);
      navigator.geolocation.watchPosition(
        function (position) {},
        function (error) {
          if (error.code === error.PERMISSION_DENIED)
            setGeolocationDenied(true);
        }
      );
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          if (position && position.coords) {
            const { latitude, longitude } = position.coords;
            const geoResult = await getGeoLocationByCoordinates({
              latitude,
              longitude,
            });
            if (geoResult && geoResult.length > 0) {
              const country = await findCountryByAlpha2(geoResult[0].country);
              setLocalCountryAndCity({
                city: geoResult[0].name,
                alpha2: country.alpha2,
                country: country.name,
              });
            }
          }
        } catch (error) {
          console.log("LoadGeoData error:", error);
          alert(3);
          showToast(error);
        }
      });
    } catch (error) {
      alert("No se pudo obtener la ubicación actual");
    }
  };

  useEffect(() => {
    loadGeoData();
  }, []);

  const onSaveAsFavorite = () => {
    navigate("/main");
  };

  return (
    <Layout title="MyWeatherApp">
      <div className="flex flex-col w-full gap-6 p-2">
        <div
          className="flex flex-col items-center justify-center w-full h-40 gap-0 text-xl text-black bg-center bg-no-repeat bg-cover rounded-xl bg-opacity-20 "
          style={{ backgroundImage: 'url("/images/weatherbg.jpg")' }}
        >
          <div className="flex flex-col items-center justify-center w-full py-2 bg-opacity-40 bg-slate-400 ">
            <span className="text-black font-russo-one ">Code Challenge</span>
            <span className="text-black font-russo-one ">Para DBAccess</span>
            <span className="text-base text-black">por Elis Arcia</span>
          </div>
        </div>
        {localCountryAndCity && (
          <>
            <div>Tu ubicación actual</div>
            <CityContainer
              countryAndCity={localCountryAndCity}
              onSaveAsFavorite={onSaveAsFavorite}
            />
          </>
        )}
        {geolocationDenied && !localCountryAndCity && (
          <div className="flex flex-col items-center justify-center w-full">
            <ImageRender svgName="alert-avalanche-danger" width="5rem" />
            No hemos podido obtener tu ubicación actual
            <span className="text-center text-2xs">
              Habilitar tu ubicación nos permite brindarte una mejor
              experiencia.
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full py-3 mt-3 border-y border-slate-700">
        <a href="/main" className="w-full text-sm text-center" alt="">
          Continuar
        </a>
      </div>
      <div className="flex flex-col w-full py-3 mt-3">
        <span className="w-full text-xs text-center">
          Esta app fue desarrollada con ReactJS y TailwindCSS
          <br />
          utiliza las APIs de OpenWeatherMap.
          <br />
          Solo para fines demostrativos.
        </span>
      </div>
    </Layout>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;
