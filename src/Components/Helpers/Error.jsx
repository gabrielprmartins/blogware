import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      <h2 className="subtitle">Ocorreu um erro</h2>
      <h1 className="title">Erro: {error}</h1>
    </div>
  );
};

export default Error;
