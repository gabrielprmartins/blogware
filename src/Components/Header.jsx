import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <NavLink to="tags">Tags</NavLink>
      </div>
    </header>
  );
};

export default Header;
