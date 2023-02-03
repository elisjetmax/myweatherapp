import { action } from "@storybook/addon-actions";
import { withRouter } from "storybook-addon-react-router-v6";
import CityContainer from ".";

export default {
  title: "CityContainer",
  component: CityContainer,
  decorators: [withRouter],
};

const argentina = {
  country: "Argentina",
  alpha2: "ar",
  city: "Buenos Aires",
  temperature: 10,
};

const Usa = {
  country: "Estados Unidos",
  alpha2: "eu",
  city: "Florida",
  temperature: 18,
};

export const MuestraArgentinaBuenosAires = () => (
  <CityContainer
    countryAndCity={argentina}
    onSaveAsFavorite={action("Agregado a Favoritos")}
  ></CityContainer>
);

export const MuestraEstadosUnidosFlorida = () => (
  <CityContainer
    countryAndCity={Usa}
    onSaveAsFavorite={action("Agregado a Favoritos")}
  ></CityContainer>
);
