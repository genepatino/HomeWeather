import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setLoader: ["loader"],
  /*  setEmail: ["email"],
  setPassword: ["password"],
  setError: ["error"], */
});

export const AppWeather = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loader: true,
  /* email: "",
  password: "",
  error: "", */
});

/* ------------- Reducers ------------- */
export const setLoader = (state, { loader }) => state.merge({ loader });

/* export const setEmail = (state, { email }) => state.merge({ email });

export const setPassword = (state, { password }) => state.merge({ password });

export const setError = (state, { error }) => state.merge({ error }); */
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  /*  [Types.SET_EMAIL]: setEmail,
  [Types.SET_PASSWORD]: setPassword,
  [Types.SET_ERROR]: setError, */
  [Types.SET_LOADER]: setLoader,
});
