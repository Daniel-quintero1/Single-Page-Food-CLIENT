import { Link } from "react-router-dom";
import style from "./Page.module.css"
// es mi NAVBAR () para poder navegar dentro de mi app
const Page = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home">
        <p>HOME</p>
      </Link>
      <Link to="/form">
        <p>FORM </p>
      </Link>
  
    </div>
  );
};

export default Page;
