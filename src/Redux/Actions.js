//Action types. con las que dan las funcionalidad con mi Back
import {
  CLEAN_DETAIL,
  FILTER_RECIPE,
  GET_DETAILRECIPE,
  GET_DIET,
  GET_RECIPE,
  SEARCH_RECIPE,
  GET_FROM,
  CLEAN_API,
  CLEAN_BDD,
  ORDEN_BY_NAME,
  ORDEN_BY_HEALTSCORE,
  SET_CURRENT_PAGE, 
} from "./store";
import axios from "axios";

export function AllRecipe() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/recipes`);
      dispatch({ type: GET_RECIPE, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
}
export const searchRecipe = (title) => {
  return async function (dispatch) {
    const recipe = (
      await axios.get(`http://localhost:3001/recipes?title=${title}`)
    ).data;
    dispatch({ type: SEARCH_RECIPE, payload: recipe });
  };
};

export const getFrom = (source) => {
  return {
    type: GET_FROM,
    payload: source,
  };
};
export function DetailRecipe(idRecipe) {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/recipes/${idRecipe}`
    );
    dispatch({ type: GET_DETAILRECIPE, payload: response.data });
  };
}

export function CleanDetail() {
  return { type: CLEAN_DETAIL };
}

export function FilterRecipe() {
  return async (dispatch) => {
    dispatch({ type: FILTER_RECIPE });
  };
}

export function getDiet() {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/diets`);
   dispatch({ type: GET_DIET, payload: response.data });
  };
}
export function CleanApi() {
  return { type: CLEAN_API };
}
export function CleanBdd() {
  return { type: CLEAN_BDD };
}

export const OrdenByName = (name) => {
  return { type: ORDEN_BY_NAME, payload: name}
}
export const OrdenByHealtScore = (healtScore) => {
  return { type: ORDEN_BY_HEALTSCORE, payload: healtScore}
}
export function setCurrentPage (page) {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}


