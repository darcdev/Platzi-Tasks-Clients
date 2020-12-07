import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";

const Barra = () => {
  const authContext = useContext(AuthContext);
  const { usuario } = authContext;

  return (
    <div className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <a href="#!">Cerrar Sesion</a>
      </nav>
    </div>
  );
};

export default Barra;
