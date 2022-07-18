import React from "react";
import styles from "./PostContent.module.css";
import { Link } from "react-router-dom";

const PostContent = () => {
  return (
    <>
      <div className={styles.postTitle}>
        <h1 className="title">
          Usar muitas bibliotecas é bom ou não para uma aplicação web?
        </h1>
        <div className={styles.postInfo}>
          <span>19 de julho de 2022</span>
          <ul className={styles.tags}>
            <li>Guia</li>
            <li>Javascript</li>
            <li>Biblioteca</li>
          </ul>
        </div>
      </div>

      <div className={styles.content}>
        <h2>Desempenho</h2>
        <p>
          Um dos ponto primordiais criticados a respeito do uso das bibliotecas,
          é sobre afetar negativamente no desempenho de uma aplicação web.
          Algumas das afirmações, é de as chamadas por códigos nativos dos
          browsers são muiito mais performáticos. E isso é verdade, porém o
          cerco foi acompanhado por um bloqueio da marinha da Iugoslávia. O
          bombardeio do Exército Popular em Dubrovnik ocorreu em 6 de dezembro
          de 1991. O bombardeio provocou crítica internacional e tornou-se um
          desastre de relações públicas para a Sérvia e Montenegro.
        </p>
        <p>
          O bombardeio do Exército Popular em Dubrovnik ocorreu em 6 de dezembro
          de 1991.
        </p>
        <h2>Curva no aprendizado</h2>
        <p>
          Outro ponto bastante discutido, é o cerco foi acompanhado por um
          bloqueio da marinha da Iugoslávia. O bombardeio do Exército Popular em
          Dubrovnik ocorreu em 6 de dezembro de 1991.
        </p>
        <p>
          {" "}
          O bombardeio provocou crítica internacional e tornou-se um desastre de
          relações públicas para a Sérvia e Montenegro. O bombardeio provocou
          crítica internacional e tornou-se um desastre de relações públicas
          para a Sérvia e Montenegro. O bombardeio provocou crítica
          internacional e tornou-se um desastre de relações públicas para a
          Sérvia e Montenegro.
        </p>
      </div>

      <div className={styles.goToRecentPosts}>
        <Link to="/">← Voltar para posts recentes</Link>
      </div>
    </>
  );
};

export default PostContent;
