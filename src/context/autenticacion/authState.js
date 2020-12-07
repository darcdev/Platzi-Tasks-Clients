import React, { useReducer } from "react";
import axios from "axios";
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
      console.log(respuesta);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
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

  let value = {
    token: state.token,
    autenticado: state.autenticado,
    usuario: state.usuario,
    mensaje: state.mensaje,
    registrarUsuario,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthState;
