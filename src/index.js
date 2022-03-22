import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import firebaseConfig from "./firebase/firebaseConfig";
import { FirebaseAppProvider } from "reactfire";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { connect } from "react-redux";
import App from "./App";

import "./index.css";
import global_es from "./components/utility/locales/es/global.json";
import global_en from "./components/utility/locales/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});
const AppContainer = ({ loader }) => (
  <Provider store={store}>
    <PersistGate loading={loader} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider appName="HomeWeather" firebaseConfig={firebaseConfig}>
      <I18nextProvider i18n={i18next}>
        <AppContainer />
      </I18nextProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

const mapStateToProps = (state) => {
  return {
    loader: state.appReducer.loader,
  };
};

export default connect(mapStateToProps, null)(AppContainer);

serviceWorker.unregister();
