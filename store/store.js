import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { createRouterMiddleware } from "connected-next-router";
import { createWrapper } from "next-redux-wrapper";
import { format } from "url";
import Router from "next/router";

const routerMiddleware = createRouterMiddleware();
const middleware = [thunk, routerMiddleware];

// Using next-redux-wrapper's initStore
export const initStore = (context) => {
  //   const routerMiddleware = createRouterMiddleware();
  const { asPath, pathname, query } = context.ctx || Router.router || {};
  let initialState;
  if (asPath) {
    const url = format({ pathname, query });
    initialState = {
      // router: initialRouterState(url, asPath),
    };
  }
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
};

// const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
export const wrapper = createWrapper(initStore);
