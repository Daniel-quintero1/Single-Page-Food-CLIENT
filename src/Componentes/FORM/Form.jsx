// FORM PAGE |: en esta vista se encontrará el
// formulario para crear una nueva receta.

import axios from "axios";
import { useEffect, useState } from "react";
import Validation from "../Validations/validations.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getDiet } from "../../Redux/Actions.js";

const Form = () => {
  //debemos tener un input
  const dispatch = useDispatch();
  const dietas = useSelector((state) => state.dietas);
  useEffect(()=> {
    dispatch(getDiet())
  }, [dispatch])

  const [form, setForm] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: [],
    dieta: [],
  });
  // vamos a setear y validar los error que ocurra con mi cliente
  const [error, setError] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    dieta: "",
  });

  const ChangeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setError(Validation({ ...form, [property]: value }));
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    alert("Enviado informacion");
    axios
      .post(`http://localhost:3001/recipes`, form)
      .then((res) => alert("Recipe Add"))
      .catch((err) => alert(err));
    setForm({
      title: "",
      image: "",
      summary: "",
      healthScore: "",
      analyzedInstructions: [],
      dieta: [],
    });
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;

    const selectDiets = form.dieta;

    if (selectDiets.includes(value)) {
      // Si la opción seleccionada ya está en el array, la eliminamos
      setForm({
        ...form,
        dieta: selectDiets.filter((t) => t !== value),
      });
    } else {
      // Si la opción seleccionada no está en el array, la agregamos
      setForm({ ...form, dieta: [...selectDiets, value] });
    }
  };
  const buscarId = (id) => {
    const recipeDiet = dietas.find((e) => e.id === id);
    return recipeDiet.id;
  };
  const dietsMap = form.dieta.map((e) => buscarId(e));

  return (
    <form onSubmit={handlerSubmit}>
      <hr />
      <div>
        <label>Name of Recipe:</label>
        <input
          type="text"
          value={form.title}
          onChange={ChangeHandler}
          name="title"
          placeholder="Writing Name..."
        />
        <span>{error.title ? error.title : " "}</span>
      </div>

      <div>
        <label>healthScore:</label>
        <input
          type="text"
          value={form.healthScore}
          onChange={ChangeHandler}
          name="healthScore"
          placeholder="Writing HealthScore..."
        />
        <span>{error.healthScore}</span>
      </div>

      <div>
        <label>Summary: </label>
        <input
          type="text"
          value={form.summary}
          onChange={ChangeHandler}
          name="summary"
          placeholder="Writing Summary..."
        />
        <span>{error.summary}</span>
      </div>
      <div>
        <label>analyzedInstructions: </label>
        <input
          type="text"
          value={form.analyzedInstructions}
          onChange={ChangeHandler}
          name="analyzedInstructions"
          placeholder="Writing Instructions..."
        />
        <span>{error.analyzedInstructions}</span>
      </div>

      <div>
        <label>Url: </label>
        <img src={form.image} alt="" />
        <input
          type="text"
          value={form.image}
          onChange={ChangeHandler}
          name="image"
          placeholder="Writing URL Please..."
        />
        <span>{error.image}</span>
      </div>

      <div>
        <label>Type Diet:</label>
        <input
          type="text"
          value={dietsMap.join(", ")}
          onChange={ChangeHandler}
          name="Diets"
          placeholder="How Diets??"
        />
        <select
          name="Diets"
          multiple={true}
          value={form.dieta}
          onChange={handleSelectChange}
        >
          {dietas.map((e) => (
            <option key={e.id} value={e.id}>{e.title}</option>
          ))}
        </select>
        <span>{error.dieta}</span>
      </div>
      <button type="submit">ADD NEW RECIPE</button>
      <hr />
      <Link to="/home">Back to Home Recipe</Link>
      <hr />
      <Link to="/landing">Return Recipes By Daniel Quintero</Link>
    </form>
  );
};

export default Form;
