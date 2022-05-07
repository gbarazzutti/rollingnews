import React, {useState} from "react";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { validarEmail } from "../helpers/helpers";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [usuarioEmail, setUsuarioEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [error, setError] = useState(false);
  const [errorMje, setErrorMje] = useState("");
  const URL = process.env.REACT_APP_API_URL + "/login";
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los datos del form
    if (validarEmail(usuarioEmail)) {
      // reset el state de error
      setError(false);
      // crear el objeto con los datos del usario a verificar
      const usuario = {
        usuarioEmail: usuarioEmail,
        password: password,
      };

      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        };
        const respuesta = await fetch(URL, parametros);
        //console.log(respuesta)
        const dato = await respuesta.json();
        if (respuesta.status === 200) {
          // mostrar cartel al usuario
          Swal.fire(
            "Usuario logueado!",
            "Autentificación exitosa",
            "success"
          );
          // resetear el formulario
          e.target.reset(); //el e.target en este caso por el submitt es el form
          //Guardo el token de acceso del usaurio en localStorage
          localStorage.setItem("accessToken", dato.accessToken);
          // redireccion a la pagina de lista de noticias
          navigation("/rn/admin");
        } else {
         // console.log(dato.mensaje);
          setError(true);
          dato.mensaje && setErrorMje(dato.mensaje);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      //mostral cartel de error
      setError(true);
      setErrorMje("Debe ingresar un email valido");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="juanperez@ejemplo.com"
          maxlength="30"
          required=""
          onChange={(e) => setUsuarioEmail(e.target.value)}
        />
        <div className="invalid-feedback">
          Por favor ingrese un email valido.
        </div>
      </div>
      <div className="mb-3">
        <Form.Label>Password</Form.Label>
        <div className="password-toggle">
          <Form.Control
            type={passwordShown ? "text" : "password"}
            maxlength="70"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="password-toggle-btn text-primary btn"
            type="button"
            onClick={togglePassword}
          >
            {passwordShown ? (
              <BsEyeSlashFill></BsEyeSlashFill>
            ) : (
              <BsEyeFill></BsEyeFill>
            )}
          </button>
        </div>
      </div>
      <div className="mb-3 d-flex justify-content-end">
        <a
          className="fs-sm text-secondary text-decoration-none btn"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Presione para el envio del email de recuperacion"
        >
          ¿Olvidó su password?
        </a>
      </div>
      <button
        className="btn btn-primary btn-shadow d-block w-100"
        type="submit"
      >
        Iniciar Sesión
      </button>
      {error === true ? (
        <Alert variant="danger" onClick={()=> setError(false)} dismissible>
          {errorMje}
        </Alert>
      ) : null}
    </Form>
  );
};

export default Login;
