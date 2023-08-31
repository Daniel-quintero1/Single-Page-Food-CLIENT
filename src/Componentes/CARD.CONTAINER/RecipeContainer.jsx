import { useEffect, useState } from "react";
import AddCard from "../CARDS/RecipeCard";
import style from "./RecipeContainer.module.css";
import { useSelector, useDispatch } from "react-redux";

const RecipeContainer = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.AllRecipe);
  const recipeApi = useSelector((state) => state.recipeApi);
  const recipeBdd = useSelector((state) => state.recipeBdd);
  const currentPage = useSelector((state) => state.currentPage);
  const showRecipe =
    recipeApi.length > 0
      ? recipeApi
      : recipeBdd.length > 0
      ? recipeBdd
      : recipes;
  const [currentRecipe, setCurrentCard] = useState([showRecipe])
  const totalPage = Math.ceil(showRecipe.length / 9)

  const previusPage = () => {
    if(currentPage > 1) {
      dispatch(setCurrentCard(currentPage -1))
    }
  }
  const nextPage = () => {
    if(currentPage < totalPage) {
      dispatch(setCurrentCard(currentPage + 1))
    }
  }
  useEffect(()=> {
    const startIndex = (currentPage - 1) * 9
    const endIndex = startIndex + 9
    setCurrentCard(showRecipe.slice(startIndex, endIndex))
  }, [currentPage, showRecipe])
  return (
    <div>
      <div className={style.container}>
        {currentRecipe.map((recipe, index) => (
          <AddCard
            key={index} {...recipe}
          />
        ))}
      </div>
      <button onClick={previusPage}>PREV</button>
      <button onClick={nextPage}>NEXT</button>
    </div>
  );
};

export default RecipeContainer;
