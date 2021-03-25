import { FC } from "react";
import Layout from "./components/layout/Layout";
import RouteCreator from "./utils/RouteCreator";

const App: FC = () => {
  return (
    <Layout>
      <RouteCreator />
    </Layout>
  );
};

export default App;
