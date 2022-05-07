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


const CardConImg = (props) => {
  
  const [avatar, setAvatar] = useState("");
  let autor = props.noticia[0].autor;

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
           <Card className="card bg-transparent h-100 my-4">
            <div className="position-relative h-100">
              <img
                className="card-img w-100 h-100"
                src={`${props.noticia[0].imagen}`}
                alt={props.noticia[0].titulo}
              />
              <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                <div className="w-100 mt-auto">
                  <Link
                    to={"/"+props.noticia[0].categoria}
                    className="card-link badge bg-warning mb-2 text-decoration-none"
                  >
                    <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
                    {props.noticia[0].categoria}
                  </Link>
                </div>
              </div>
            </div>
            <Card.Body className="px-1 pt-3">
              <Card.Title className="card-title">
                <Link
                   to={"/noticia/" + props.noticia[0]._id}
                  className="card-link btn-link text-reset fw-bold text-decoration-none"
                >
                  {props.noticia[0].titulo}
                </Link>
              </Card.Title>
              <Card.Text>
              {props.noticia[0].descripcion}
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
                        <Link
                          to="/acercadenosotros"
                          className="stretched-link text-reset btn-link text-decoration-none"
                        >
                           {props.noticia[0].autor}
                        </Link>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">|  {parseDate(props.noticia[0].fecha)}</li>
              </ul>
            </Card.Body>
          </Card>  
        </>
    );
};

export default CardConImg;