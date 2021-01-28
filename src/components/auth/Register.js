import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";
import Alert from "../layout/Alert";

const Register = ({ history }) => {
  // extraer valores context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  //En caso de que el usuario se haya autenticado o registrado o sea un registro
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
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confpassword.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    // password minimo de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "El password debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }
    // los 2 passwords son iguales
    if (password !== confpassword) {
      mostrarAlerta("Los passwords no son iguales", "alerta-error");
      return;
    }
    // pasarlo al action
    registrarUsuario({ nombre, email, password });
  };
  return (
    <div className="form-usuario">
      <Alert alert={alerta} />
      <div className="contenedor-form sombra-dark">
        <h1 data-cy="titulo">Obtener una Cuenta</h1>

        <form data-cy="nueva-cuenta" onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              data-cy="nombre-input"
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu nombre"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              data-cy="email-input"
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
              data-cy="password-input"
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
              data-cy="repeat-password-input"
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
              data-cy="submit-nueva-cuenta"
            />
          </div>
        </form>
        <Link data-cy="enlace-login" to="/" className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
