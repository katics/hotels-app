import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";

const storeInstanceName = "Hotels Store";
const options = { name: storeInstanceName };

const composeEnchansers = composeWithDevTools(options);

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(
  rootReducer,
  composeEnchansers(applyMiddleware(sagaMiddleware))
);

export default store;
