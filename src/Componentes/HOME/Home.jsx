  import { useEffect } from "react";
//aca es donde debemos reecplazar por el URL de los Recipe
import { useDispatch } from "react-redux";
import {
  AllRecipe,
  CleanApi,
  CleanBdd,
  OrdenByHealtScore,
  OrdenByName,
  getFrom,
  setCurrentPage,
} from "../../Redux/Actions";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../NAVBAR/SearchBar";
import RecipeContainer from "../CARD.CONTAINER/RecipeContainer";
// import styles from './Home.module.css'
// aqui finaliza lo de paginado y se agrega al div
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllRecipe());
  }, [dispatch]);

  return (
    <div>
      <Link to="/form">
        <p>CREATE NEW RECIPE </p>
      </Link>
      <SearchBar />
      <h1>Welcome to Every Recipe Cards</h1>
      <div>
        <button
          value="api"
          onClick={(e) => {
            dispatch(getFrom(e.target.value));
            dispatch(CleanBdd());
            dispatch(setCurrentPage(1))
          }}
        >
          API
        </button>
        <button
          value="bdd"
          onClick={(e) => {
            dispatch(getFrom(e.target.value));
            dispatch(CleanApi());
            dispatch(setCurrentPage(1))
          }}
        >
          BDD
        </button>
        <button
          onClick={() => {
            dispatch(AllRecipe());
            dispatch(CleanApi());
            dispatch(CleanBdd());
            dispatch(setCurrentPage(1))
          }}
        >
          TODO
        </button>
        <select
          name="OrdenByName"
          onChange={(e) => dispatch(OrdenByName(e.target.value))}
        >
          {["Ascendente", "Desendente"].map((tipo, index) => (
            <option value={tipo} key={index}>
              {tipo}
            </option>
          ))}
        </select>
        <select
          name="OrderByHealtScore"
          onChange={(e) => dispatch(OrdenByHealtScore(e.target.value))}
        >
          {["Mas Saludable", "Menos Saludable"].map((tipo, index) => (
            <option value={tipo} key={index}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <RecipeContainer />
    </div>
  );
};

export default Home;
