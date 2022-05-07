import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { validarEmail } from "../helpers/helpers";

const Registro = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [usuarioEmail, setUsuarioEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
  const [error, setError] = useState(false);
  const [errorMje, setErrorMje] = useState("");
  const URL = process.env.REACT_APP_API_URL + "/registro";
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los datos del form
    if (validarEmail(usuarioEmail)) {
      // reset el state de error
      setError(false);
      // crear un nuevo usuario
      const nuevoUsuario = {
        nombreUsuario: nombreUsuario,
        usuarioEmail: usuarioEmail,
        password: password,
        passwordCheck: passwordCheck,
      };

      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoUsuario),
        };
        const respuesta = await fetch(URL, parametros);
        console.log(respuesta);
        const dato = await respuesta.json();
        console.log(dato)
        if (respuesta.status === 201) {
          // mostrar cartel al usuario
          Swal.fire(
            "Usuario registrado!",
            "Usuario creado correctamente",
            "success"
          );
          // resetear el formulario
          e.target.reset(); //el e.target en este caso por el submitt es el form
          // redireccion a la pagina principal
          navigation("/");
        } else {
          setError(true);
          dato.mensaje && setErrorMje(dato.mensaje);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      //mostral cartel de error
      setError(true);
      setError(true);
      setErrorMje("Debe ingresar un email valido")
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Form.Label>Nombre Completo*</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          placeholder="Juan Perez"
          maxlength="30"
          required=""
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <Form.Label>Email*</Form.Label>
        <Form.Control
          type="email"
          placeholder="juanperez@ejemplo.com"
          maxlength="30"
          required=""
          onChange={(e) => setUsuarioEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <Form.Label>Password*</Form.Label>
        <div className="password-toggle">
          <Form.Control
            type={passwordShown ? "text" : "password"}
            id="su-password"
            maxlength="70"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <a
            className="password-toggle-btn text-primary btn"
            type="button"
            onClick={togglePassword}
          >
            {passwordShown ? (
              <BsEyeSlashFill></BsEyeSlashFill>
            ) : (
              <BsEyeFill></BsEyeFill>
            )}
          </a>
        </div>
      </div>
      <div className="mb-3">
        <Form.Label>Confirmar password*</Form.Label>
        <div className="password-toggle">
          <Form.Control
            type={passwordShown ? "text" : "password"}
            maxlength="70"
            required=""
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <a
            className="password-toggle-btn text-primary btn"
            type="button"
            onClick={togglePassword}
          >
            {passwordShown ? (
              <BsEyeSlashFill></BsEyeSlashFill>
            ) : (
              <BsEyeFill></BsEyeFill>
            )}
          </a>
        </div>
      </div>
      <button
        className="btn btn-primary btn-shadow d-block w-100"
        type="submit"
      >
        Regístrate
      </button>
      {error === true ? (
        <Alert variant="danger" onClick={()=> setError(false)} dismissible>
          {errorMje}
        </Alert>
      ) : null}
    </Form>
  );
};

export default Registro;
