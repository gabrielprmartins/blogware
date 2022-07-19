import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo";
import TagIcon from "../Assets/TagIcon";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <NavLink to="tags" className={styles.tagsLink}>
          <TagIcon size={21} /> Tags
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
