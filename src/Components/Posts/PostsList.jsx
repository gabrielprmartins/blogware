import React from "react";
import styles from "./PostsList.module.css";

const PostsList = () => {
  return (
    <section className={styles.posts}>
      <div className={styles.post}>
        <span>19 de julho de 2022</span>
        <h2>Usar muitas bibliotecas é bom ou não para uma aplicação web?</h2>
        <p>
          Um dos ponto primordiais criticados a respeito do uso das bibliotecas,
          é sobre afetar negativamente no desempenho de uma aplicação web.
          Algumas das afirmações, é de as chamadas por códigos nativos dos
          browsers são muiito mais performáticos. E isso é verdade, porém...
        </p>
        <ul className={styles.tags}>
          <li>Guia</li>
          <li>Javascript</li>
          <li>Biblioteca</li>
        </ul>
      </div>
    </section>
  );
};

export default PostsList;
