import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Image, Form, Button } from "react-bootstrap";
import logo2 from "../img/logo2.png";
import appStore from "../img/app-store.svg";
import googlePlay from "../img/google-play.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-4 pt-3 shadow-footer">
      <div className="container-fluid">
        <div className="row pt-3 pb-4">
          <div className="col-md-2">
            <Link to="/">
            <Image fluid src={logo2} alt="RollingNews logo"></Image>
            </Link>
          </div>
          <div class="col-md-5">
            <p class="text-muted">
              Somos el diario digital lider del segmento, trabajando
              incansablemente para mantener a nuestros lectores siempre
              informados con las últimas noticias.
            </p>
          </div>
          <div class="col-md-4">
            <Form class="row row-cols-lg-auto g-2 align-items-center justify-content-end">
              <div class="col-12 mb-3">
                <Form.Control type="email" placeholder="Ingrese su email" />
              </div>
              <div class="col-12 text-center">
                <Button variant="primary" type="submit">
                  Subscribete
                </Button>
              </div>
              <div class="form-text mt-2 text-center">
                Al subscribirse usted está de acuerdo con nuestra
                <Link
                  to="/error404"
                  class="text-decoration-underline text-reset ms-2"
                >
                  Política de Privacidad
                </Link>
              </div>
            </Form>
          </div>
          <div className="col-md-12 my-3 text-center">
          <h5 class="mb-4 text-white text-center">Nuestras redes</h5>
            <a
              className="mx-3 text-light"
              href="https://facebook.com"
              target="BLANK_"
            >
              <FaFacebook />
            </a>
            <a
              className="mx-3 text-light"
              href="https://twitter.com"
              target="BLANK_"
            >
              <FaTwitter />
            </a>
            <a
              className="mx-3 text-light"
              href="https://instagram.com"
              target="BLANK_"
            >
              <FaInstagram />
            </a>
            <a
              className="mx-3 text-light"
              href="https://youtube.com"
              target="BLANK_"
            >
              <FaYoutube />
            </a>
          </div>
          <hr></hr>
          <div class="col-md-6 mb-4 text-center">
            <h5 class="mb-4 text-white">Navegación</h5>
            <div class="row">
              <div class="col-12">
                <ul class="nav flex-column text-primary-hover">
                  <li class="nav-item">
                    <Link class="pt-0 text-decoration-none" to="/contacto">
                      Contacto
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="text-decoration-none" to="/acercadenosotros">
                      Acerca de nosotros
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="text-decoration-none" to="/error404">
                      Mapa del sitio
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="text-decoration-none" to="/error404">
                      Ayuda
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="text-decoration-none" to="/error404">
                      Términos y condiciones
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="text-decoration-none" to="/error404">
                      Política de Privacidad
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="text-decoration-none" to="/error404">
                      Anúnciese con nosotros
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <h5 class="mb-4 text-white text-center">Nuestra App</h5>
            <p class="text-muted text-center">
              Baja nuestra App y obtendrás las últimas noticias y
              titulares, además de artículos de interés para ti.
            </p>
            <div class="row g-2 text-center">
              <div class="col">
                <a href="https://www.apple.com/la/app-store/" target="BLANK_">
                  <Image class="w-100" src={appStore} alt="app-store" />
                </a>
              </div>
              <div class="col">
                <a href="https://play.google.com/store?hl=es_AR&gl=US" target="BLANK_">
                  <Image class="w-100" src={googlePlay} alt="google-play" />
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-secondary lead fs-6 pb-3">
            &copy; Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
