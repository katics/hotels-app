import ReactDOM from "react-dom";
import "./index.scss";

import AppPage from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <AppPage />
  </Provider>,
  document.getElementById("root")
);
