import React from "react";
import pillow from "../img/pillow.jpg";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AiOutlineSwapLeft } from "react-icons/ai";

const Error404 = () => {
  return (
    <>
      <section className="overflow-hidden">
        <Container>
          <div className="row">
            <div className="col-md-9"></div>
            <Card
              className="card bg-dark-overlay-4 overflow-hidden card-bg-scale  mt-5 mb-4 text-center shadow"
              style={{
                backgroundImage: `url(${pillow})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100vw",
                height: "100vh",
                borderRadius: "10px",
              }}
            >
              <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 my-auto">
                  <Card.Title className="text-white display-4">404</Card.Title>
                  <h2>Página no encontrada</h2>
                  <Card.Text className="text-center text-light lead fs-6 px-0">
                    Hubo un problema o la página no existe más.
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Link to="/" className="btn btn-danger mt-3">
                      <AiOutlineSwapLeft className="me-3"></AiOutlineSwapLeft>
                      Volver al inicio
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Error404;
