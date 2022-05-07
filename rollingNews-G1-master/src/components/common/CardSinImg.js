import React, { useState, useEffect} from 'react';
import { Card } from "react-bootstrap";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import garciaAndy from "../img/garciaAndy.png";
import alanizJuan from "../img/alanizJuan.png";
import cordobaAbel from "../img/cordobaAbel.png";
import marquezEsteban from "../img/marquezEsteban.jpg";
import barazzuttiGuillermo from "../img/barazzuttiGuillermo.png";
import { DateTime } from "luxon";

const CardSinImg = (props) => {

  const [avatar, setAvatar] = useState("");
  let autor = props.noticias.autor;

  const getAvatar = (autor) => {
    let avatarImg = "";

    switch (autor) {
      case "Abel Cordoba Gonzalez":
        avatarImg = cordobaAbel;
        setAvatar(avatarImg);
        break;
      case "Juan Alaniz":
        avatarImg = alanizJuan;
        setAvatar(avatarImg);
        break;
      case "Andy Garcia":
        avatarImg = garciaAndy;
        setAvatar(avatarImg);
        break;
      case "Guillermo Barazzutti":
        avatarImg = barazzuttiGuillermo;
        setAvatar(avatarImg);
        break;
      case "Esteban Marquez":
        avatarImg = marquezEsteban;
        setAvatar(avatarImg);
        break;
      default:
        break;
    }
  };
   
  useEffect(() => {
    getAvatar(autor);
  }, []);
 
  const parseDate = (date) => {
    return DateTime.fromISO(date).setLocale('sp').toFormat('MMMM dd, yyyy');
   }

    return (
        <>
            <Card className="card mb-4">
            <Card.Body className="p-4 border rounded-3">
              <Link to={"/"+ props.noticias.categoria} className="card-link badge bg-danger mb-2 text-decoration-none">
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                {props.noticias.categoria}
              </Link>
              <Card.Title>
                <Link  to={"/noticia/" + props.noticias._id} className="card-link btn-link text-reset fw-bold text-decoration-none">
                {props.noticias.titulo}
                </Link>
              </Card.Title>
              <Card.Text className="m-0 text-decoration-none">
              {props.noticias.descripcion}
              </Card.Text>
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img
                          className="avatar-img rounded-circle"
                          src={avatar}
                          alt="avatar"
                        />
                      </div>
                      <span className="ms-3">
                        Por{" "}
                        <Link to="/acercadenosotros" className="stretched-link text-reset btn-link">
                        {props.noticias.autor}
                        </Link>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item small">{parseDate(props.noticias.fecha)}</li>
              </ul>
            </Card.Body>
          </Card>
        </>
    );
};

export default CardSinImg;