import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";

const Contacto = () => {
  return (
    <section className="my-4">
      <Container>
        <div className="row">
          <div className="col-md-9 mx-auto text-center">
            <h1 className="display-4 text-primary">Contáctanos</h1>
            <nav className="d-flex justify-content-center" aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-dots mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-decoration-none" to="/">
                    <BiHomeCircle></BiHomeCircle> Inicio
                  </Link>
                </li>
                <li className="breadcrumb-item active">Contáctanos</li>
              </ol>
            </nav>
          </div>
        </div>
      </Container>
      <section className="pt-4">
        <Container>
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <iframe
                className="rounded w-100 h-300 grayscale border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1049265915053!2d-65.20936748436935!3d-26.8366147964997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1587935793791!5m2!1ses-419!2sar"
                height="500"
                width="100%"
                frameborder="0"
                aria-hidden="false"
                tabindex="0"
              ></iframe>

              <div className="row my-4">
                <div className="col-12 text-center">
                  <h2 className="text-danger">Contacto</h2>
                  <p>
                    Por favor llene el siguiente formulario y nos contactaremos
                    con usted a la brevedad. Su email no será publicado.
                  </p>
                  <Form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <Form.Control
                            required=""
                            name="nombre"
                            type="text"
                            placeholder="Juan Perez"
                            maxLength={90}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <Form.Control
                            required=""
                            name="email"
                            type="email"
                            placeholder="juanperez@mail.com"
                            maxLength={70}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <Form.Control
                            as="textarea"
                            required=""
                            name="mensaje"
                            cols="40"
                            rows="6"
                            className="form-control"
                            placeholder="Su mensaje..."
                            maxLength={200}
                          />
                        </div>
                      </div>

                      <div className="col-md-12 text-start">
                        <button className="btn btn-primary w-100" type="submit">
                         Enviar
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Contacto;
