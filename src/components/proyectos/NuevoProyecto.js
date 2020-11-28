import React, { useState } from "react";

const NuevoProyecto = () => {
  // state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  const { nombre } = proyecto;

  const onSubmitProyecto = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Agregar Proyecto"
        />
      </form>
    </>
  );
};

export default NuevoProyecto;
