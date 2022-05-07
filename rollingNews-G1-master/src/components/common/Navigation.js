import React, { useState, useEffect } from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import obtenerFecha from "../helpers/fechaLocal";
import ClimaLocal from "../pages/PaginaPrincipal/ClimaLocal";
import Cotizaciones from "../pages/Cotizaciones";
import ModalLoginRegistro from "./ModalLoginRegistro";


const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mostrar, setMostrar] = useState(false);
  const handleCerrar = () => setMostrar(false);
  const handleMostrar = () => setMostrar(true);
  const [navCategorias, setNavcategorias] = useState([]);
  const [sidebarCategorias, setSidebarCategorias] = useState([]);
  const [sidebaDropCategorias, setSidebaDropCategorias] = useState([]);
  const [categoriasTotal, setCategoriasTotal] = useState([]);
  const [error, setError] = useState(true);
  const [error2, setError2] = useState(true);
  const [error3, setError3] = useState(true);
  const navigation = useNavigate();
  
  //verifico si el usuario esta logueado
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user =  localStorage.getItem('accessToken');
   //console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = ()=>{
    localStorage.removeItem('accessToken');
    navigation("/");
    window.location.reload();
  }

  //consulta a la API
  const URL = process.env.REACT_APP_API_URL + "/categoria/?_start=0&_end=6";

  const URL2 = process.env.REACT_APP_API_URL + "/categoria/?_start=0&_end=3";

  const URL3 = process.env.REACT_APP_API_URL + "/categoria/";

  const URL4 =
    process.env.REACT_APP_API_URL +
    "/categoria/?_start=3&_end=" +
    categoriasTotal.length;

  useEffect(() => {
    consultaAPI();
  }, [error, error2, error3]);

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
      const respuesta2 = await fetch(URL2);
      const dato2 = await respuesta2.json();
      const respuesta3 = await fetch(URL3);
      const dato3 = await respuesta3.json();
      const respuesta4 = await fetch(URL4);
      const dato4 = await respuesta4.json();

      setNavcategorias(dato);
      setError(false);

      setSidebarCategorias(dato2);
      setError2(false);

      setCategoriasTotal(dato3);

      setSidebaDropCategorias(dato4);
      setError3(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setError2(true);
      setError3(true);
    }
  };

 

  return (
    <>
      <header>
        <Container fluid>
          <Navbar
            expand={false}
            className="d-flex flex-lg-row justify-content-start"
          >
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Offcanvas id="navbar-nav">
              <Offcanvas.Header
                className="ms-auto"
                closeButton
              ></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  {!error2
                    ? sidebarCategorias.map((categorias) => (
                        <Link
                          className="nav-link text-secondary text-center"
                          key={categorias.id}
                          to={`/${categorias.nombre}`}
                        >
                          {categorias.nombre}
                        </Link>
                      ))
                    : null}
                  <NavDropdown
                    className="border-0 text-secondary"
                    title="Más"
                    id="nav-dropdown"
                  >
                    {!error3
                      ? sidebaDropCategorias.map((categorias) => (
                          <Link
                            className="dropdown-item text-secondary"
                            key={categorias.id}
                            to={`/${categorias.nombre}`}
                          >
                            {categorias.nombre}
                          </Link>
                        ))
                      : null}
                  </NavDropdown>
                  <Link
                    className="nav-link text-secondary text-center"
                    to="/contacto"
                  >
                    Contacto
                  </Link>

                  <Link
                    className="nav-link  text-secondary text-center"
                    to="/acercadenosotros"
                  >
                    Acerca de nosotros
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Mapa del sitio
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Ayuda
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Términos y condiciones
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Política de Privacidad
                  </Link>

                  <Link
                    className="nav-link text-secondary text-center"
                    to="/error404"
                  >
                    Anúnciese con nosotros
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="d-md-flex d-none flex-row flex-wrap">
              {!error
                ? navCategorias.map((categorias) => (
                    <Link
                      className="nav-link text-secondary"
                      key={categorias.id}
                      to={`/${categorias.nombre}`}
                    >
                      {categorias.nombre}
                    </Link>
                  ))
                : null}
            </div>
            <div className="d-flex flex-row ms-auto">
              {currentUser &&  (<Link
                className="nav-link"
                id="login-btn"
                aria-current="page"
                to="rn/admin"
              >
                Admin
              </Link>)}
              {currentUser ?
              (<a
                className="nav-link btn-sm"
                type="button"
                id="login-btn"
                onClick={logout}
              >
                Logout <AiOutlineLogout className="ms-1 fs-5" />
              </a>) :
              (<a
                className="nav-link btn-sm"
                type="button"
                id="login-btn"
                onClick={handleMostrar}
              >
                Login <AiOutlineLogin className="ms-1 fs-5" />
              </a>)}
              <Button
                variant="danger"
                className="fw-bold rounded-0"
                id="btn-suscribite"
                onClick={handleShow}
              >
                SUSCRIBITE
              </Button>
            </div>
          </Navbar>
        </Container>
        <Navbar className="shadow" bg="white" variant="light" expand="lg">
          <Container fluid>
            <Link to="/">
              <img
                className="img-fluid"
                src="logo.png"
                alt="RollingNews logo"
              ></img>
            </Link>
            <div className="d-flex flex-column flex-md-row justify-content-center">
              <Cotizaciones></Cotizaciones>
              <Navbar.Text className="text-center">
                <ClimaLocal></ClimaLocal>
              </Navbar.Text>
              <Navbar.Text className="text-center fw-bold">
                {obtenerFecha()}
              </Navbar.Text>
            </div>
          </Container>
        </Navbar>
      </header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Suscribete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p ClassName="fw-bold">
            <span className="text-danger">Únete a nuestro Newsletters</span>
          </p>
          <Form className="row  g-2 align-items-center justify-content-end">
            <div className="col-12 mb-3">
              <Form.Control type="email" placeholder="Ingrese su email" />
            </div>
            <div className="col-12 text-center">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </div>
            <div className="form-text mt-2 text-center">
              Al subscribirse usted está de acuerdo con nuestra
              <Link
                to="/error404"
                className="text-decoration-underline text-reset ms-2"
              >
                Política de Privacidad
              </Link>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ModalLoginRegistro
        mostrar={mostrar}
        setMostrar={setMostrar}
        handleCerrar={handleCerrar}
      ></ModalLoginRegistro>
    </>
  );
};

export default Navigation;
