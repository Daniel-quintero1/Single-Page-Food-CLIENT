import { Link } from "react-router-dom";
import style from "./AddRecipeCard.module.css";
const AddCard = ({
  id,
  title,
  image,
  summary,
  healthScore,
  analyzedInstructions,
  diets,
  dieta
}) => {
  return (
    <div className={style.card}>
      <hr />
      <Link to={`/detail/${id}`}>
        <h4>Recipe: {title}</h4>
      </Link>
       {diets && (<h5>{diets}</h5>)}
       {dieta && (<h5>{dieta.map((dieta)=> dieta.title).join(", ")}</h5>)}
      <img src={image} alt="" />
      <p>HealthScore: {healthScore}</p>
      <hr />
    </div>
  );
};

export default AddCard;
