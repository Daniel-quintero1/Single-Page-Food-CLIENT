// debo definir un boton START para entrar a la app del home. 
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <h1>Recipes By Daniel Quintero</h1>
      <p>
        Nuestros ingenieros de conocimiento pasaron años elaborando nuestra
        compleja ontología alimentaria, que nos permite comprender las
        relaciones entre ingredientes, recetas, nutrición, alérgenos y más.
      </p>
      <Link to="/home">Start to Recipe</Link>
    
    </div>
  );
  // RECUERDA QUE DEBEMOS AGREGAR EL BOTON A HOME
};


export default Landing;
