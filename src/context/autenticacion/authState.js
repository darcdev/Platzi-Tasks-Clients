import React, { useReducer } from "react";
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

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };
  const [state, dispatch] = useReducer(Authreducer, initialState);

  let value = {
    token: state.token,
    autenticado: state.autenticado,
    usuario: state.usuario,
    mensaje: state.mensaje,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthState;
