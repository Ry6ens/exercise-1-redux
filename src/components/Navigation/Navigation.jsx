import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const getClassName = ({ isActive }) => {
    return isActive ? styles.activeLink : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getClassName}>
        Logo
      </NavLink>
      <NavLink to="/menu" className={getClassName}>
        Menu
      </NavLink>
      <NavLink to="/bucket" className={getClassName}>
        Bucket
      </NavLink>
    </nav>
  );
}
