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
    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR:
    case LOGIN_EXITOSO:
    case LOGIN_ERROR:
    case OBTENER_USUARIO:
    case CERRAR_SESION:
    default:
      return state;
  }
};

export default Authreducer;
