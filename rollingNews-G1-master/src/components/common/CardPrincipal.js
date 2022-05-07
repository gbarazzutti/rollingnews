import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import garciaAndy from "../img/garciaAndy.png";
import alanizJuan from "../img/alanizJuan.png";
import cordobaAbel from "../img/cordobaAbel.png";
import marquezEsteban from "../img/marquezEsteban.jpg";
import barazzuttiGuillermo from "../img/barazzuttiGuillermo.png";
import { DateTime } from "luxon";

const CardPrincipal = (props) => {
  const [avatar, setAvatar] = useState("");
  let autor = props.noticia1[0].autor;

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
    return DateTime.fromISO(date).setLocale("sp").toFormat("MMMM dd, yyyy");
  };

  return (
    <>
      <Card
        className="card card-overlay-bottom card-grid-lg card-bg-scale h-500 mt-5 mb-4"
        style={{
          backgroundImage: `url("${props.noticia1[0].imagen}")`,
          backgroundPosition: "center left",
          backgroundSize: "cover",
        }}
      >
        <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
          <div className="w-100 mt-auto">
            <Link
              to={"/" + props.noticia1[0].categoria}
              className="card-link badge bg-danger mb-2 text-decoration-none"
            >
              <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
              {props.noticia1[0].categoria}
            </Link>
            <Card.Title className="text-dark fs-2 position-relative">
              <Link
                 to={"/noticia/" + props.noticia1[0]._id}
                className="card-link btn-link stretched-link text-reset text-decoration-none"
              >
                {props.noticia1[0].titulo}
              </Link>
            </Card.Title>
            <Card.Text className="text-dark">
              {props.noticia1[0].descripcion}
            </Card.Text>
            <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
              <li className="nav-item">
                <div>
                  <div className="d-flex align-items-center text-white position-relative">
                    <div className="avatar avatar-sm">
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
                        {props.noticia1[0].autor}
                      </Link>
                    </span>
                  </div>
                </div>
              </li>
              <li className="nav-item text-white ms-2">
                | {parseDate(props.noticia1[0].fecha)}
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardPrincipal;
