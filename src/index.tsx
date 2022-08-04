import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
// @ts-ignore
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
