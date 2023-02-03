import Layout from "./Layout";

import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Layout",
  component: Layout,
  decorators: [withRouter],
};

export const Muestra = () => (
  <Layout
    title="StoryBook de Layout"
    subTitle="Muestra de subtitulo"
    showBackButton={true}
  >
    <div className="flex items-center justify-center h-48 bg-slate-900">
      <div className="p-5 text-center rounded w-fit bg-slate-700">
        Soy ejemplo de 'children'
      </div>
    </div>
  </Layout>
);
