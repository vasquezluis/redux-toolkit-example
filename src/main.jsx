import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

// ? redux
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // ? El provider encapsula toda la aplicacion
  <Provider store={store}>
    {/* el store es el archivo store donde estan todos los reducers */}
    <React.StrictMode>
      {/* Routing */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
