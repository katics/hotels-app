import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// const storeInstanceName = "Hotels Store";
// const options = { name: storeInstanceName };
// const composeEnchansers = composeWithDevTools(options);

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  //composeEnchansers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
