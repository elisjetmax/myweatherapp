import Header from "./Header";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Header",
  component: Header,
  decorators: [withRouter],
};

export const Example = () => (
  <Header title={"Hola, soy un título"} subTitle="Yo busco ser un subtitulo" />
);
