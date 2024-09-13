import { Outlet, Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.list}>
          <Link to="/">
            <li className={style.item}>
              <img className={style.logo} src="./Volkswagen-Logo.png"></img>
            </li>
          </Link>

          <Link to="/">
            <li className={style.item}>Home</li>
          </Link>

          <Link to="/createCar">
            <li className={style.item}>Cadastro</li>
          </Link>

          <Link to="/listCar">
            <li className={style.item}>Carros</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
