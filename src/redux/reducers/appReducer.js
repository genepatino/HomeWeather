import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setUser: ["user"],
  setLoader: ["loader"],
  setData: ["data"],
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  loader: true,
  data: {},
});

/* ------------- Reducers ------------- */

export const setUser = (state, { user }) => state.merge({ user });
export const setLoader = (state, { loader }) => state.merge({ loader });
export const setData = (state, { data }) => state.merge({ data });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.SET_LOADER]: setLoader,
  [Types.SET_DATA]: setData,
});
