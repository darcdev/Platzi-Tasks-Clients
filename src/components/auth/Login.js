import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";
import Alert from "../layout/Alert";
const Login = ({ history }) => {
  // extraer valores context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  //En caso de que el password o usuario no existan
  useEffect(() => {
    if (autenticado) {
      history.push("/proyectos");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, history]);
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });
  //extraer usuario
  const { email, password } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    // validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    // pasarlo al action
    iniciarSesion({ email, password });
  };
  return (
    <div className="form-usuario">
      <Alert alert={alerta} />
      <div className="contenedor-form sombra-dark">
        <h1 data-cy="titulo">Iniciar Sesion</h1>

        <form data-cy="form-login" onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              data-cy="email-input"
              type="email"
              id="email"
              name="email"
              placeholder={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              data-cy="password-input"
              type="password"
              id="password"
              name="password"
              placeholder={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              data-cy="submit-login"
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link
          data-cy="nueva-cuenta"
          to="/nueva-cuenta"
          className="enlace-cuenta"
        >
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
