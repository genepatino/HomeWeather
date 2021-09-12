import { createStore, combineReducers } from "redux";
import { reducer as appWeather } from "./reducers/appWeather";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  appWeather,
  /* appReducer,
  noteReducer, */
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
