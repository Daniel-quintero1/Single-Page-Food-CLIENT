import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DETAILRECIPE = "GET_DETAILRECIPE";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_DIET = "GET_DIET";
export const POST_RECIPE = "POST_RECIPE";
export const FILTER_RECIPE = "FILTER_RECIPE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const SEARCH_RECIPE_ERROR = "SEARCH_RECIPE_ERROR";
export const GET_FROM = "GET_FROM";
export const CLEAN_API = "CLEAN_API";
export const CLEAN_BDD = "CLEAN_BDD";
export const ORDEN_BY_NAME = "ORDEN_BY_NAME";
export const ORDEN_BY_HEALTSCORE = "ORDEN_BY_HEALTSCORE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
