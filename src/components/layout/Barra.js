import React from "react";

const Barra = () => {
  return (
    <div className="app-header">
      <p className="nombre-usuario">
        Hola <span>Juan Pablo</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Cerrar Sesion</a>
      </nav>
    </div>
  );
};

export default Barra;
