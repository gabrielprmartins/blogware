import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Blogware {currentYear} ©</p>
    </footer>
  );
};

export default Footer;
