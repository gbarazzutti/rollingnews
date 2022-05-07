import React, { useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";
import CardFold from "../common/CardFold";

const PostsXCategoria = () => {
  const { categoria } = useParams(); 
  const [noticiasXcategoria, setNoticiasXcategoria] = useState([]);
  const [error, setError] = useState(true);
  
  const URL =
  process.env.REACT_APP_API_URL +
  "/?categoria="+categoria;
  
  useEffect(() => {
    consultaAPI();
  }, [categoria, error]);
  
  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
     
      setNoticiasXcategoria(dato);
      setError(false);
      
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  
  return (
    <>
      <section className="pt-4">
        <Container>
          <div className="row">
            <div className="col-12">
              <div className="bg-primary-soft text-center rounded-3 p-4">
                <h1 className="text-primary">{categoria}</h1>
                <nav
                  className="d-flex justify-content-center"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-decoration-none" to="/">
                        <BiHomeCircle></BiHomeCircle> Inicio
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Posts Totales</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="position-relative pt-0">
        <Container>
          <div className="row">
          {!error ? (noticiasXcategoria.map((noticias) => (<div className="col-sm-6 col-lg-3"><CardFold key={noticias.id} noticias={noticias}></CardFold></div>))) : null}
          </div>
         
        </Container>
      </section>
    </>
  );
};

export default PostsXCategoria;
