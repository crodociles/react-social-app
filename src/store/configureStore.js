import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import statusReducer from "../reducers/status";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      status: statusReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
