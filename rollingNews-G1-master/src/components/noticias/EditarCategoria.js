import React, { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import ItemCategoria from "./ItemCategoria";
import {campoRequerido} from "../helpers/helpers";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const EditarCategoria = (props) => {
    const { id } = useParams();
    const [err, setError] = useState(false);
    const [categoria, setCategoria] = useState({});

    const URL_CAT = process.env.REACT_APP_API_URL + "/categorias/" + id;

     // crear variables ref
   const nombreRef = useRef("");
   const descripcionRef = useRef("");

   useEffect(async () => {
    // consultar a la API la cetegoria que tiene el id
    try {
      // realizar una consulta GET
      const respuesta = await fetch(URL_CAT);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        console.log(dato)
        setCategoria(dato);
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
    campoRequerido(nombreRef.current.value)
  ) {
    
    // reset el state de error
    setError(false);
    // construir el objeto a enviar a la API
    const categoriaModificada = {
      nombre: nombreRef.current.value,
      descripcion: descripcionRef.current.value,
    };
   
    try {
        //consulta PUT para modificar valores en la API
        const respuesta = await fetch(URL_CAT, {
          method: "PUT",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(categoriaModificada),
        });
       
      if (respuesta.status === 200) {
       
        // mostrar cartel al usuario
        Swal.fire(
          "Categoria Modificada!",
          "La categoria se creo correctamente",
          "success"
        );
        // volver a pedir a la API
        props.consultaAPICat();
      } 
    } catch (error) {
      console.log(error);
    }
  } else {
    //mostral cartel de error
    setError(true);
  }
};
  
  return (
    <>
      <div className="page-header">
        <h1 className="page-heading">Categorias</h1>
      </div>
      <section>
        <div className="mb-5 row">
          <div className="col-lg-3 mb-4">
            <Card className="mb-4 mb-lg-0">
              <Card.Body>
                <Form className="mb-4" id="formCategorias"  onSubmit={handleSubmit}>
                  <Form.Label>Nombre*</Form.Label>
                  <Form.Control
                    className="mb-4"
                    type="text"
                    placeholder="Ingrese el nombre de la categoria"
                    defaultValue={categoria.nombre}
                    ref={nombreRef}
                    maxLength="30"
                  />

                  <Form.Label className="mb-4">Descripción</Form.Label>
                  <Form.Control
                    className="mb-4"
                    as="textarea"
                    placeholder="Describa la categoria brevemente aqui..."
                    maxLength="80"
                    defaultValue={categoria.descripcion}
                    ref={descripcionRef}
                  />
                  <Form.Text className="text-muted mb-4">
                    La descripción se puede obviar, pero en algunos temas es
                    útil.
                  </Form.Text>
                </Form>

                  <button form="formCategorias" type="submit" className="my-4 btn btn-primary">
                    Editar Categoria
                  </button>
                {err === true ? (
                  <Alert variant="danger">
                    Debe cargar todos los datos requeridos (*)
                  </Alert>
                ) : null}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-9 mb-4">
            <Card className="card-table">
              <Table
                className=" mb-1 table-borderless table-hover table-light table-striped w-100"
                responsive
              >
                <thead className="table-dark text-light">
                  <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Botones de acción</th>
                  </tr>
                </thead>
                <tbody>
                  {props.categorias.map((categorias) => (
                    <ItemCategoria
                      key={categorias._id}
                      categorias={categorias}
                      consultaAPICat={props.consultaAPICat}
                    ></ItemCategoria>
                  ))}
                </tbody>
              </Table>
              <Card.Footer></Card.Footer>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditarCategoria;
