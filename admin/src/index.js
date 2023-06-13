import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
      {/* Wrap the App component with the PersistGate to enable Redux store persistence */}
    <PersistGate loading="null" persistor={persistor}>
      {/* Render the App component */}
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
