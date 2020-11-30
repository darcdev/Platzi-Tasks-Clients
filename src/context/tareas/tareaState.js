import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

const TareaState = ({ children }) => {
  const initialState = {
    tareas: [
      {
        nombre: "Elegir Plataforma",
        estado: true,
        proyectoId: 1,
      },
      {
        nombre: "Elegir Colores",
        estado: false,
        proyectoId: 2,
      },
      {
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 3,
      },
      {
        nombre: "Elegir Plataforma",
        estado: true,
        proyectoId: 1,
      },
      {
        nombre: "Elegir Colores",
        estado: false,
        proyectoId: 2,
      },
      {
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 3,
      },
      {
        nombre: "Elegir Plataforma",
        estado: true,
        proyectoId: 1,
      },
      {
        nombre: "Elegir Colores",
        estado: false,
        proyectoId: 2,
      },
      {
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 3,
      },
    ],
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  let value = {
    tareas: state.tareas,
  };

  return (
    <TareaContext.Provider value={value}>{children}</TareaContext.Provider>
  );
};

export default TareaState;
