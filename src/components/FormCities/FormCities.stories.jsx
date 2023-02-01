import FormCities from "./FormCities";

export default {
  title: "FormCities",
  component: FormCities,
};

export const FormCitiesExample = () => (
  <FormCities
    onSelectCountryAndCity={(country, city) => {
      console.log("Stories Country :>> ", country);
      console.log("Stories City :>> ", country);
    }}
  />
);
