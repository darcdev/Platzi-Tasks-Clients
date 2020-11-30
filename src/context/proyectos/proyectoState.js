import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { v4 as uuid } from "uuid";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = ({ children }) => {
  const proyectos = [
    { id: 1, nombre: "Tienda virtual" },
    { id: 2, nombre: "Intranet" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
  };
  //dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };
  //proyecto actual

  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  // valores provider
  let value = {
    proyectos: state.proyectos,
    formulario: state.formulario,
    errorFormulario: state.errorFormulario,
    proyecto: state.proyecto,
    mostrarFormulario,
    obtenerProyectos,
    agregarProyecto,
    mostrarError,
    proyectoActual,
    eliminarProyecto,
  };
  // serie de funciones para crud
  return (
    <proyectoContext.Provider value={value}>
      {children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
