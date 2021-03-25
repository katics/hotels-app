import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,

  document.getElementById("root")
);
