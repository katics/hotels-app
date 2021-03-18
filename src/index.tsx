import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import HotelProvider from "./store/HotelsProider";

ReactDOM.render(
  <HotelProvider>
    <App />
  </HotelProvider>,
  document.getElementById("root")
);
