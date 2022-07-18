import React from "react";
import styles from "./TagList.module.css";

const TagList = () => {
  return (
    <ul className={styles.tags}>
      <li>
        <a href="">Guia (2)</a>
      </li>
      <li>
        <a href="">Javascript (1)</a>
      </li>
      <li>
        <a href="">Biblioteca (2)</a>
      </li>
      <li>
        <a href="">Framework (1)</a>
      </li>
      <li>
        <a href="">Performance (1)</a>
      </li>
    </ul>
  );
};

export default TagList;
