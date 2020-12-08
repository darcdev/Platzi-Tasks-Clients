import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import clienteAxios from "../../config/axios";

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
} from "../../types";
import tokenAuth from "../../config/tokenAuth";

const ProyectoState = ({ children }) => {
  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
    mensaje: null,
  };
  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const resultado = await clienteAxios.get("/api/proyectos");
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProyecto = async (proyecto) => {
    try {
      const resultado = await clienteAxios.post("/api/proyectos", proyecto);
      console.log(resultado);
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
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

  const eliminarProyecto = async (proyectoId) => {
    try {
      await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
  };

  // valores provider
  let value = {
    proyectos: state.proyectos,
    formulario: state.formulario,
    errorFormulario: state.errorFormulario,
    proyecto: state.proyecto,
    mensaje: state.mensaje,
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
