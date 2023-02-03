import { action } from "@storybook/addon-actions";
import { withRouter } from "storybook-addon-react-router-v6";
import CityOptions from ".";

export default {
  title: "CityOptions",
  component: CityOptions,
  decorators: [withRouter],
};

export const CityOptionsStorie = () => (
  <CityOptions onSaveCityAsFavorite={action("Agregar a Favoritos")} />
);
