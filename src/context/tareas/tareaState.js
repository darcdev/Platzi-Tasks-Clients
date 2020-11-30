import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
} from "../../types";

const TareaState = ({ children }) => {
  const initialState = {
    tareas: [
      {
        nombre: "Elegir Plataforma",
        estado: true,
        proyectoId: 1,
        id: 1,
      },
      {
        nombre: "Elegir Colores",
        estado: false,
        proyectoId: 2,
        id: 2,
      },
      {
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 3,
        id: 3,
      },
      {
        nombre: "Elegir Plataforma",
        estado: true,
        proyectoId: 1,
        id: 4,
      },
      {
        nombre: "Elegir Colores",
        estado: false,
        proyectoId: 2,
        id: 5,
      },
      {
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 3,
        id: 6,
      },
      {
        nombre: "Elegir Plataforma",
        estado: true,
        proyectoId: 1,
        id: 7,
      },
      {
        nombre: "Elegir Colores",
        estado: false,
        proyectoId: 2,
        id: 8,
      },
      {
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 3,
        id: 9,
      },
    ],
    tareasProyecto: null,
    errorTarea: false,
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // funciones

  //Obtener las tareas de un proyecto

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // valida y muestra un error en caso que sea necesario

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };
  let value = {
    tareas: state.tareas,
    tareasProyecto: state.tareasProyecto,
    errorTarea: state.errorTarea,
    obtenerTareas,
    agregarTarea,
    validarTarea,
    eliminarTarea,
  };
  return (
    <TareaContext.Provider value={value}>{children}</TareaContext.Provider>
  );
};

export default TareaState;
