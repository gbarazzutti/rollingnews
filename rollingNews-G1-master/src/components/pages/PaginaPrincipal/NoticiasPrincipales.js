import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import publicidad1 from "../../img/publicidad1.jpg";
import CardConImg from "../../common/CardConImg";
import CardPrincipal from "../../common/CardPrincipal";


const NoticiasPrincipales = () => {
  const URL1 =
    process.env.REACT_APP_API_URL +
    "?_sort=categoria&_order=desc&categoria=Política";
  const URL2 =
  
    process.env.REACT_APP_API_URL +
    "?_sort=categoria&_order=desc&categoria=Economía";
  const URL3 =
    process.env.REACT_APP_API_URL +
    "?_sort=categoria&_order=desc&categoria=Deportes";
  const [noticia1, setNoticia1] = useState([]);
  const [noticia2, setNoticia2] = useState([]);
  const [noticia3, setNoticia3] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    consultaAPI();
  }, [error]);

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta1 = await fetch(URL1);
      const dato1 = await respuesta1.json();

      setNoticia1(dato1);
      const respuesta2 = await fetch(URL2);
      const dato2 = await respuesta2.json();

      setNoticia2(dato2);
   
      const respuesta3 = await fetch(URL3);
      const dato3 = await respuesta3.json();

      setNoticia3(dato3);
    
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          {!error ? (
            <CardPrincipal noticia1={noticia1}></CardPrincipal>
          ) : null}
        </Col>
        <Col md={3}>
          <img
            className="w-100 h-auto border border-2 border-danger mt-5"
            src={publicidad1}
            alt="publicidad Mr.Clean"
          />
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={6}>
          {!error ? (
            noticia2.categoria === "Economía" ? (
              <CardConImg noticia={noticia2}></CardConImg>
            ) : (
              <CardConImg noticia={noticia3}></CardConImg>
            )
          ) : null}
        </Col>
        <Col md={6}>
          {!error ? (
            noticia3.categoria === "Deportes" ? (
              <CardConImg noticia={noticia3}></CardConImg>
            ) : (
              <CardConImg noticia={noticia2}></CardConImg>
            )
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default NoticiasPrincipales;
