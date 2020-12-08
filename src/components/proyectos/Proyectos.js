import React from "react";
import Barra from "../layout/Barra";
import Sidebar from "../layout/Sidebar";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";

const Proyectos = () => {
  // Extraer informacion autenticacion
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <main>
          <Barra />
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
