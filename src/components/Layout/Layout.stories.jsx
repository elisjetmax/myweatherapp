import Layout from "./Layout";
/*
export default {
  title: "Layout",
  component: Layout,
};

export const LayoutExample = () => (
  <Layout title="Example Layout">Example Layout</Layout>
);

*/

import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Layout",
  component: Layout,
  decorators: [withRouter],
};

export const Example = () => (
  <Layout title="Ejemplo de Layout">
    <h1>Soy ejemplo de un 'children'</h1>
  </Layout>
);
