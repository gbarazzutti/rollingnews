import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Collapse from "react-bootstrap/Collapse";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  campoRequerido,
  validarFecha,
  validarRichText,
  validarURL,
} from "../helpers/helpers";
import Swal from "sweetalert2";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ direction: "rtl" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const EditarNoticia = (props) => {
    const { id } = useParams();
   
  const [open, setOpen] = useState(false);
  const [noticia, setNoticia] = useState({});
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const [contenido, setContenido] = useState("");

  const URL = process.env.REACT_APP_API_URL + "/noticias/" + id;
  const navigation = useNavigate();


   // crear variables ref
   const tituloRef = useRef("");
   const imagenRef = useRef("");
   const descripcionRef = useRef("");
   const fechaRef = useRef("");

   useEffect(async () => {
    // consultar a la API la noticia que tiene el id
    try {
      // realizar una consulta GET
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
       
        setNoticia(dato);
        setCategoria(dato.categoria);
       
        setAutor(dato.autor);
       
        setContenido(dato.contenido);
      }
    } catch (error) {
      console.log(error);
      //mostrar cartel error al usuario
    }
  }, []);

  const handleSubmit = async (e) => {
     
    e.preventDefault();
    //validar los datos del form
    if (
      campoRequerido(tituloRef.current.value) &&
      validarURL(imagenRef.current.value) &&
      campoRequerido(descripcionRef.current.value) &&
      validarRichText(contenido) &&
      campoRequerido(autor) &&
      campoRequerido(categoria) &&
      validarFecha(fechaRef.current.value)
    ) {
      
    
      // reset el state de error
      setError(false);
      // construir el objeto a enviar a la API
      const noticiaModificada = {
        titulo: tituloRef.current.value,
        imagen: imagenRef.current.value,
        descripcion: descripcionRef.current.value,
        contenido: contenido,
        autor: autor,
        categoria: categoria,
        fecha: fechaRef.current.value,
      };
     
      try {
          //consulta PUT para modificar valores en la API
          const respuesta = await fetch(URL, {
            method: "PUT",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(noticiaModificada),
          });
         
        if (respuesta.status === 200) {
         
          // mostrar cartel al usuario
          Swal.fire(
            "Noticia Modificada!",
            "La Noticia se creo correctamente",
            "success"
          );
          // volver a pedir a la API
          props.consultaAPI();
          // redireccion a la pagina de lista de noticias
          navigation("/rn/admin/CMS/noticias");
          // volver a pedir a la API
          props.consultaAPI();
        } 
      } catch (error) {
        console.log(error);
      }
    } else {
      //mostral cartel de error
      setError(true);
    }
  };

  const createMarkup = () => {
    return { __html: contenido };
  };
  return (
    <>
      <div className="page-header">
        <h1 className="page-heading">Editar noticia</h1>
      </div>
      <section>
        <div className="mb-5 row">
          <div className="mb-4 mb-lg-0 col-xxl-9 col-lg-8">
            <Card>
              <Card.Body>
                <Form id="formNews" onSubmit={handleSubmit}>
                  <Form.Label>Título*</Form.Label>
                  <Form.Control
                    type="text"
                    id="postTitle"
                    className="mb-4"
                    maxLength="100"
                    
                    defaultValue={noticia.titulo}
                    ref={tituloRef}
                  ></Form.Control>
                  <Form.Label>URL de la imagen*</Form.Label>
                  <Form.Control
                    type="text"
                    id="postImg"
                    className="mb-4 form-control"
                    maxLength="200"
                    
                    defaultValue={noticia.imagen}
                    ref={imagenRef}
                  ></Form.Control>
                  <Form.Label>Descripción breve*</Form.Label>
                  <Form.Control
                    className="mb-4"
                    as="textarea"
                    placeholder="Describa el post brevemente aqui..."
                    maxLength="200"
                    
                    defaultValue={noticia.descripcion}
                    ref={descripcionRef}
                  />
                  <Form.Label>Autor*</Form.Label>
                  <Form.Select
                    className="mb-3"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                  >
                    <option value="">Seleccione un Autor</option>
                    <option value="Abel Cordoba Gonzalez">Abel Córdoba González</option>
                    <option value="Juan Alaniz">Juan Alaniz</option>
                    <option value="Andy Garcia">Andy Garcia</option>
                    <option value="Guillermo Barazzutti">
                      Guillermo Barazzutti
                    </option>
                    <option value="Esteban Marquez">Esteban Marquez</option>
                  </Form.Select>
                  <Form.Label>Contenido*</Form.Label>
                  <ReactQuill
                    modules={modules}
                    theme="snow"
                    value={`${contenido}`}
                     onChange={setContenido}
                    placeholder="El contenido va aqui..."
                    
                    defaultValue={noticia.contenido}
                  />
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xxl-3 col-lg-4">
            <Card className="shadow-sm mb-4">
              <Card.Header className="py-4 bg-white">
                <h4 className="card-heading">Categorias*</h4>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <Form.Select
                    className="mb-3"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                  >
                    <option value="">Seleccione un Categoria</option>
                    {props.categorias.map((categoria) => (
                      <option
                        key={props.categorias._id}
                        value={categoria.nombre}
                      >
                        {categoria.nombre}
                      </option>
                    ))}
                  </Form.Select>
                </div>
                <Link
                  to="/rn/admin/CMS/categorias"
                  className="btn btn-link"
                  role="button"
                >
                  + Agregar Categoria
                </Link>
              </Card.Body>
            </Card>
            <Card className="shadow-sm mb-4">
              <Card.Header className="py-4 bg-white">
                <h4 className="card-heading">Publicar</h4>
              </Card.Header>
              <Card.Body className="text-grey-700">
                <div className="d-flex flex-lg-column mb-4 justify-content-end">
                  
                  <button
                    type="button"
                    className="mb-2 btn btn-outline-secondary btn-sm"
                    onClick={() => setOpen(!open)}
                    aria-controls="vistaPrevia"
                    aria-expanded={open}
                  >
                    Vista Previa: Contenido
                  </button>
                </div>
                <hr className="bg-gray-500"></hr>
                <div className="mb-3">
                  <strong>Fecha de Publicación*</strong>
                </div>
                <div className="py-3 row">
                  <div className="col-lg-6">
                    <Form.Control
                      size="sm"
                      type="date"
                      placeholder="aaaa/mm/dd"
                      form="formNews"
                      defaultValue={noticia.fecha}
                      ref={fechaRef}
                    />
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-end">
                <button
                  form="formNews"
                  type="submit"
                  className="btn btn-primary"
                >
                  Publicar Edición
                </button>
                {error === true ? (
                  <Alert variant="danger">
                    Debe cargar todos los datos requeridos (*)
                  </Alert>
                ) : null}
              </Card.Footer>
            </Card>
          </div>
          <div className="my-3 mb-lg-0 col-xxl-9 col-lg-8">
            <Collapse in={open}>
              <Card className="shadow-sm mb-4" id="vistaPrevia">
                <Card.Header className="py-4 bg-white">
                  <h4 className="card-heading">Vista Previa del Contenido</h4>
                </Card.Header>
                <Card.Body
                  className="text-grey-700"
                  dangerouslySetInnerHTML={createMarkup()}
                ></Card.Body>
              </Card>
            </Collapse>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditarNoticia;
