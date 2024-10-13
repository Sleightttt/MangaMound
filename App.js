import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import "./firebaseConfig"; // Just import it to ensure it's initialized
import { Provider, useSelector, useDispatch } from "react-redux";

import store from "./store";
import DebugStateComponent from "./debug";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <DebugStateComponent />
    </Provider>
  );
}
