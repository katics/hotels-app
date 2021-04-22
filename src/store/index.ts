import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
