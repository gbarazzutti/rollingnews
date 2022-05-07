import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

const CardFold = (props) => {

  const parseDate = (date) => {
    return DateTime.fromISO(date).setLocale('sp').toFormat('MMMM dd, yyyy');
   }
  return (
    <>
      <Card className="rounded my-4">
        <div className="card-fold position-relative">
          <img className="card-img w-100 h-auto" src={props.noticias.imagen} alt={props.noticias.titulo} />
        </div>
        <Card.Body className="px-2 pt-3">
          <Card.Title className="text-center text-primary small">
          {props.noticias.categoria}
          </Card.Title>
          <Card.Title>
            <Link to={"/noticia/" + props.noticias._id} className="btn-link text-reset stretched-link fw-bold">
            {props.noticias.titulo}
            </Link>
          </Card.Title>
          <Card.Text>
          {props.noticias.descripcion}
          </Card.Text>

          <ul className="nav nav-divider align-items-center text-uppercase small">
            <li className="nav-item">
              <span className="me-3 small">
                Por{" "}
                <Link
                  to="/acercadenosotros"
                  className="text-reset btn-link"
                >
                 {props.noticias.autor}
                </Link>
              </span>
            </li>
            <li className="nav-item small">| {parseDate(props.noticias.fecha)}</li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardFold;
