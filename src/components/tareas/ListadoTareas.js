import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareasProyecto } = tareasContext;
  // si no hay proyecto seleccionado
  if (!proyecto)
    return <h2 data-cy="seleccionar-projecto">Selecciona un Proyecto</h2>;

  const [proyectoActual] = proyecto;

  return (
    <>
      <h2 data-cy="projecto-nombre">Proyecto : {proyectoActual.nombre}</h2>

      <ul data-cy="listado-tareas" className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <>
            {tareasProyecto.map((tarea) => (
              <Tarea key={tarea._id} tarea={tarea} />
            ))}
          </>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoActual._id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
