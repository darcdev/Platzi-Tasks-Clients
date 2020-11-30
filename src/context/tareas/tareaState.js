import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
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
    tareaSeleccionada: null,
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
    tarea.id = uuid();
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

  // eliminar la tarea seleccionada

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // cambiar estado tarea

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // Extrae tarea para edicion

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // actualizar tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };
  //elimina tarea seleccionada

  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };
  let value = {
    tareas: state.tareas,
    tareasProyecto: state.tareasProyecto,
    tareaSeleccionada: state.tareaSeleccionada,
    errorTarea: state.errorTarea,
    obtenerTareas,
    agregarTarea,
    validarTarea,
    eliminarTarea,
    cambiarEstadoTarea,
    guardarTareaActual,
    actualizarTarea,
    limpiarTarea,
  };

  return (
    <TareaContext.Provider value={value}>{children}</TareaContext.Provider>
  );
};

export default TareaState;
