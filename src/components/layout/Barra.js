import React, { useContext } from "react";
import AuthContext from "../../context/autenticacion/authContext";

const Barra = () => {
  const authContext = useContext(AuthContext);
  const { usuario, cerrarSesion } = authContext;

  return (
    <div className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <button
          type="button"
          className="btn btn-blank cerrar-sesion"
          data-cy="cerrar-sesion"
          onClick={cerrarSesion}
        >
          Cerrar Sesion
        </button>
      </nav>
    </div>
  );
};

export default Barra;
