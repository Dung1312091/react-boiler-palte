import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router/immutable";
import { Provider } from "react-redux";
import LanguageProvider from "./containers/LanguageProvider";

import App from "./App";
import { translationMessages as messages } from "./configs/i18n";

import "./index.css";

import history from "./configs/history";
import configureStore from "./configs/configureStore";
import * as serviceWorker from "./serviceWorker";
const initialState = {};
const store = configureStore(initialState, history);
ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider messages={messages}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
