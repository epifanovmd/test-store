import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <PersistGate persistor={persistStore(store)} loading={null}> */}
      <StrictMode>
        <App />
      </StrictMode>
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);
