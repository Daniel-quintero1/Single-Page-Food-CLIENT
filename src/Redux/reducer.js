import {
  CLEAN_API,
  CLEAN_BDD,
  CLEAN_DETAIL,
  GET_DETAILRECIPE,
  GET_DIET,
  GET_FROM,
  GET_RECIPE,
  ORDEN_BY_HEALTSCORE,
  ORDEN_BY_NAME,
  POST_RECIPE,
  SEARCH_RECIPE,
  SET_CURRENT_PAGE,
} from "./store";

const initialState = {
  recipeApi: [],
  recipeBdd: [],
  CreateRecipe: [],
  detailRecipe: {},
  AllRecipe: [],
  dietas: [],
  currentPage: 1,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        AllRecipe: action.payload,
      };
    case POST_RECIPE:
      return {
        ...state,
        CreateRecipe: action.payload,
      };
    case GET_DETAILRECIPE:
      return {
        ...state,
        detailRecipe: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detailRecipe: {},
      };
    case GET_DIET:
      return {
        ...state,
        dietas: action.payload,
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        AllRecipe: action.payload,
      };
    case GET_FROM:
      const copyRecipe = [...state.AllRecipe];
      const api = copyRecipe.filter((recipe) => recipe.created === false);
      const bdd = copyRecipe.filter((recipe) => recipe.created === true);
      if (action.payload === "api") return { ...state, recipeApi: api };
      else return { ...state, recipeBdd: bdd };
    case CLEAN_API:
      return {
        ...state,
        recipeApi: [],
      };
    case CLEAN_BDD:
      return {
        ...state,
        recipeBdd: [],
      };
    case ORDEN_BY_NAME:
      const apiRecipe =
        state.recipeApi.length > 0
          ? [...state.recipeApi]
          : state.recipeBdd.length > 0
          ? [...state.recipeBdd]
          : [...state.AllRecipe];
      const sortRecipe = apiRecipe.sort((a, b) => {
        if (a.title > b.title) {
          return action.payload === "Ascendente" ? 1 : -1;
        }
        if (a.title < b.title) {
          return action.payload === "Ascendente" ? -1 : 1;
        } else {
          return 0;
        }
      });
      return { ...state, AllRecipe: sortRecipe };
    case ORDEN_BY_HEALTSCORE:
      const apiRecipeHealtScore =
        state.recipeApi.length > 0
          ? [...state.recipeApi]
          : state.recipeBdd.length > 0
          ? [...state.recipeBdd]
          : [...state.AllRecipe];
      const sortRecipeHealtScore = apiRecipeHealtScore.sort((a, b) => {
        if (a.healthScore > b.healthScore) {
          return action.payload === "Mas Saludable" ? 1 : -1;
        }
        if (a.healthScore < b.healthScore) {
          return action.payload === "Mas Saludable" ? -1 : 1;
        } else {
          return 0;
        }
      });
      return { ...state, AllRecipe: sortRecipeHealtScore };
      case SET_CURRENT_PAGE:
        return {...state, currentPage: action.payload}

    default:
      return { ...state };
  }
};

export default rootReducer;
