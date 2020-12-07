import React, { useReducer } from "react";
import tokenAuth from "../../config/tokenAuth";
import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types";
import AuthContext from "./authContext";
import Authreducer from "./authReducer";
import clienteAxios from "../../config/axios";

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };
  const [state, dispatch] = useReducer(Authreducer, initialState);

  const registrarUsuario = async (data) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", data);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
      //Obtener usuario
      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };
  //Retorna usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get("/api/auth");
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // Cuando el usuario inicia sesion
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });
      //Obtener usuario
      usuarioAutenticado();
    } catch (error) {
      console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };
  let value = {
    token: state.token,
    autenticado: state.autenticado,
    usuario: state.usuario,
    mensaje: state.mensaje,
    registrarUsuario,
    usuarioAutenticado,
    iniciarSesion,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthState;
