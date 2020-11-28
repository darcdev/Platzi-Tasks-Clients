import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = ({ children }) => {
  const initialState = {
    formulario: false,
  };
  //dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // valores provider

  let value = {
    formulario: state.formulario,
  };

  // serie de funciones para crud

  return (
    <proyectoContext.Provider value={value}>
      {children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
