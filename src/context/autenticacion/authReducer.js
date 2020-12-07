import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types";

const Authreducer = (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };
    case CERRAR_SESION:
    default:
      return state;
  }
};

export default Authreducer;
