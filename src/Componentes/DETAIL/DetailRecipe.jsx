// | en esta vista se deberá mostrar toda la
// información específica de una receta:

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CleanDetail, DetailRecipe } from "../../Redux/Actions";
import React from "react";
import { Link } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const dispatach = useDispatch();
  const {
    title,
    summary,
    image,
    healthScore,
    analyzedInstructions,
    diets,
    dieta
  } = useSelector((state) => state.detailRecipe);

  const summarySentences = summary
    ? summary.split(/\.|\?|!/).filter((sentence) => sentence.trim() !== "")
    : [];
  useEffect(() => {
    dispatach(DetailRecipe(id));
    return () => {
      dispatach(CleanDetail);
    };
  }, [dispatach, id]);
  return (
    <div>
      <h1>Recipe For: {id}</h1>

      <h2>Name of Recipe: {title}</h2>
      <hr />
      <h4>Image of Recipe: </h4>
      <img src={image} alt="Link de Imagen:" />
      <hr />
      <h3>Summary Of Recipe: </h3>
      {summarySentences.map((sentence, index) => (
        <p key={index}>{sentence}</p>
      ))}
      <hr />
      <h5>Valor HealthScore: {healthScore}</h5>
      <hr />
      <div>
        <h6>Instructions:</h6>
        {typeof analyzedInstructions === "object" &&
        Array.isArray(analyzedInstructions) ? (
          analyzedInstructions.map((e) =>
            e.steps.map((m, index) => <h6 key={index}>{m}</h6>)
          )
        ) : (
          <h5>{analyzedInstructions}</h5>
        )}
      </div>
      <hr />
      {diets && <h5>{diets}</h5>}
      {dieta && <h5>{dieta.map((d) => d).join(", ")}</h5>}
      <hr />
      <Link to="/home">Back to Home Recipe</Link>
      <hr />
      <Link to="/landing">Return Recipes By Daniel Quintero</Link>
    </div>
  );
};

export default Detail;
