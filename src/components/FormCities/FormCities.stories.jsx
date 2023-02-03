import { action } from "@storybook/addon-actions";
import FormCities from "./FormCities";

export default {
  title: "FormCities",
  component: FormCities,
};

export const Muestra = () => (
  <FormCities onSelectCountryAndCity={action("onSelectCountryAndCity")} />
);
