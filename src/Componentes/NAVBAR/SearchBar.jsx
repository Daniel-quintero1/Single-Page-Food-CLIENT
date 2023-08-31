// SearchBar: un input de búsqueda para encontrar recetas por nombre.
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../../Redux/Actions";

export default function SearchBar() {
  let dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    dispatch(searchRecipe(search));
    setSearch("");
    console.log(search);
  }
  function onInputChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onInputChange}
          value={search}
          placeholder="Find a Search"
        />
      </form>
      <button onClick={onSubmit}>Search..</button>
    </div>
  );
}
