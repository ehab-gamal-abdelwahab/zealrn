import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import store from "./src/store/index";

const Wrapper = () => (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
// Test Merge
AppRegistry.registerComponent(appName, () => Wrapper);
