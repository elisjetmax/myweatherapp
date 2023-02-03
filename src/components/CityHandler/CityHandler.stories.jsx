import { action } from "@storybook/addon-actions";
import { withRouter } from "storybook-addon-react-router-v6";
import CityHandler from ".";

export default {
  title: "CityHandler",
  component: CityHandler,
  decorators: [withRouter],
};

export const CityHandlerExample = () => (
  <CityHandler onSaveAsFavorite={action("Agregar a Favoritos")} />
);
