import React, { useContext, useEffect, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // si esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    tareaSeleccionada,
    errorTarea,
    agregarTarea,
    validarTarea,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  //state formulario

  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  // detecta si hay tarea seleccionada

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      guardarTarea(tareaSeleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaSeleccionada]);

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  // leer valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  const submitTarea = (e) => {
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    //revisar si es edicion o nueva tarea
    if (tareaSeleccionada === null) {
      // tarea nueva
      /// agregar tarea al state
      tarea.proyecto = proyectoActual._id;

      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea);
      limpiarTarea();
    }

    //reiniciar form
    guardarTarea({
      nombre: "",
    });
  };
  return (
    <div className="formulario">
      <form onSubmit={submitTarea}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaSeleccionada ? "Editar Tarea" : "Agregar tarea"}
          />
        </div>
      </form>
      {errorTarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
