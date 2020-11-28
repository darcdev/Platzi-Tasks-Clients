import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confpassword: "",
  });
  //extraer usuario
  const { nombre, email, password, confpassword } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    // validar que no haya campos vacios

    // password minimo de 6 caracteres

    // los 2 passwords son iguales

    // pasarlo al action
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="Tu nombre"
              value={nombre}
              placeholder="Tu nombre"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Contraseña"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirmar Password</label>
            <input
              type="password"
              id="confpassword"
              name="confpassword"
              value={confpassword}
              placeholder="Confirmar Contraseña"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
