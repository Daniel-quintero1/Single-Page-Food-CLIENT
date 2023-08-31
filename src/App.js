import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Page from "./Componentes/Page";
import Landing from "./Componentes/PAGE/LandingPage";
// import Home from "./Componentes/Home";
import DetailRecipe from "./Componentes/DETAIL/DetailRecipe";
import Form from "./Componentes/FORM/Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Componentes/LOGIN/Login";
import SearchBar from "./Componentes/NAVBAR/SearchBar";
import Home from "./Componentes/HOME/Home";
import { searchRecipe } from "./Redux/Actions";
//aca dentro de App declaro todas mis rutas hacindole el llamado de mis component
function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "";
  const password = "";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true); //cuando esto llega a true y activa mi hook useNavigate
      navigate("/landing"); //aca es donde dirigimos a home, recuerda q FORM esta la en ruta raiz para q pueda renderizar y rutear
    } else {
      alert("Incorrect username and password ");
    }
  }
  useEffect(() => {
    // si el acceso no esta correcto o no estan bien, entonces te quedas en la ruta raiz.
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);
  

  //este codigo es para que en page me salga siempre : {location.pathname !== "/" && <Page />}
  //el Form es el que me agrega las RECIPES
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<DetailRecipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchBar searchRecipe={searchRecipe} />} />
      </Routes>
    </div>
  );
}

export default App;
