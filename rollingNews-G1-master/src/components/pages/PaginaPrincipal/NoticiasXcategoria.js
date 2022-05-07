import React, { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import publicidad3 from "../../img/publicidad3.jpg";
import publicidad4 from "../../img/publicidad4.jpg";
import publicidad2 from "../../img/publicidad2.jpg";
import CardSinImg from "../../common/CardSinImg";

const NoticiasXcategoria = () => {
  const URL1 =
    process.env.REACT_APP_API_URL +
    "?_sort=categoria&_order=desc&categoria=Actualidad";
  const URL2 =
    process.env.REACT_APP_API_URL +
    "?_sort=categoria&_order=desc&categoria=Espectáculos";
  const URL3 =
    process.env.REACT_APP_API_URL +
    "?_sort=categoria&_order=desc&categoria=Tecnología";

  const [actualidadNews, setActualidadNews] = useState([]);
  const [espectaculosNews, setEspectaculosNews] = useState([]);
  const [tecnologiaNews, setTecnologiaNews] = useState([]);
  
  const [error, setError] = useState(true);

  useEffect(() => {
    consultaAPI();
  }, [error]);

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta1 = await fetch(URL1);
      const dato1 = await respuesta1.json();

      setActualidadNews(dato1);

      const respuesta2 = await fetch(URL2);
      const dato2 = await respuesta2.json();

      setEspectaculosNews(dato2);
   
      const respuesta3 = await fetch(URL3);
      const dato3 = await respuesta3.json();

      setTecnologiaNews(dato3);
    
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <Container>
      <Row className="my-4 g-2">
        <Col md={12}>
          <div className="text-center my-3">
            <img
              className="w-50 h-auto my-2 border"
              src={publicidad2}
              alt="publicidad"
            />
          </div>
        </Col>
        <hr className="text-danger" />
        <Col md={4}>
          <h3 className="text-center">Actualidad</h3>
           {!error ? (actualidadNews.map((noticias) => (<CardSinImg key={noticias.id} noticias={noticias}></CardSinImg>))) : null}
        </Col>

        <Col md={4}>
          <h3 className="text-center">Espectáculos</h3>
          {!error ? (espectaculosNews.map((noticias) => (<CardSinImg key={noticias.id} noticias={noticias}></CardSinImg>))) : null}
        </Col>

        <Col md={4}>
          <h3 className="text-center">Tecnología</h3>
          {!error ? (tecnologiaNews.map((noticias) => (<CardSinImg key={noticias.id} noticias={noticias}></CardSinImg>))) : null}
        </Col>
      </Row>
      <Row>
        <hr className="text-danger"/>
        <Col md={6}>
          <img
            className="w-100 h-auto my-2"
            src={publicidad3}
            alt="publicidad"
          />
        </Col>
        <Col md={6}>
          <img
            className="w-100 h-auto my-2"
            src={publicidad4}
            alt="publicidad"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NoticiasXcategoria;
