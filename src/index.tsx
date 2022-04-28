import React from "react";
import ReactDOM from "react-dom/client";
import {store, persistor} from "./store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
)
