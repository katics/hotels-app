import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.scss";

import AppPage from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import HotelsPage from "./components/pages/hotels/Hotels";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={HotelsPage} />
    </Provider>
  </Router>,

  document.getElementById("root")
);
