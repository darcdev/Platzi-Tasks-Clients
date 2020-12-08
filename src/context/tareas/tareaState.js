import React, { useReducer } from "react";
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
import clienteAxios from "../../config/axios";

const TareaState = ({ children }) => {
  const initialState = {
    tareasProyecto: [],
    errorTarea: false,
    tareaSeleccionada: null,
  };
  // crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // funciones

  //Obtener las tareas de un proyecto

  const obtenerTareas = async (proyecto) => {
    try {
      const resultado = await clienteAxios.get("/api/tareas", {
        params: { proyecto },
      });
      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarTarea = async (tarea) => {
    try {
      const resultado = await clienteAxios.post("/api/tareas", tarea);
    } catch (error) {
      console.log(error);
    }
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
