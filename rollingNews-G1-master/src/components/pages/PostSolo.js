import React, { useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { DateTime } from "luxon";


const PostSolo = () => {
  const { id } = useParams(); 
  const [noticiaId, setNoticiaId] = useState({});
  const [error, setError] = useState(true);
  const parseDate = (date) => {
    return DateTime.fromISO(date).setLocale("sp").toFormat("MMMM dd, yyyy");
  };

  /* const URL =
  process.env.REACT_APP_API_URL +
  "/?id="+id; */
  const URL =
  process.env.REACT_APP_API_URL+"/noticias/"+id;
  
  useEffect(() => {
    consultaAPI();
  }, [id, error]);
  
  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
     
      setNoticiaId(dato);
      setError(false);
      
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  const contenido = !error ? (noticiaId.contenido) : null;
  const createMarkup = () => {
    return {__html: contenido };
  };

  return (
    <>
      <section>
        <Container>
          <div className="row mt-4">
            <div className="col-lg-9 mx-auto pt-md-5">
              <Link
               to={!error ? ("/" + noticiaId.categoria) : ""}
                className="card-link badge bg-danger mb-2 text-decoration-none"
              >
                <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
               {!error ? noticiaId.categoria : null}
              </Link>
              <h1 className="display-4">
              {!error ? noticiaId.titulo : null}
              </h1>
              <p className="lead">
              {!error ? noticiaId.descripcion : null}
              </p>

              <ul className="nav nav-divider align-items-center">
                <li className="nav-item">
                  <div className="nav-link">
                    Por{" "}
                    <Link to="/acercadenosotros" className="text-reset btn-link">
                    {!error ? noticiaId.autor : null}
                    </Link>
                  </div>
                </li>
                <li className="nav-item small">{!error ? parseDate(noticiaId.fecha) : null}</li>
              </ul>
              <img
                className="rounded mt-5 w-100 h-auto"
                src={!error ? noticiaId.imagen : null }
                alt={!error ? noticiaId.titulo : null}
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-0 mt-5 post-description">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-9 mx-auto dropcap"  dangerouslySetInnerHTML={createMarkup()}>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSolo;
