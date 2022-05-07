import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import ItemCategoria from "./ItemCategoria";
import {campoRequerido} from "../helpers/helpers";
import Swal from "sweetalert2";

const Categorias = (props) => {
  const [error, setError] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const URL_CAT = process.env.REACT_APP_API_URL + "/categorias/";


  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los datos del form
    if (campoRequerido(nombre)) {
      // reset el state de error
      setError(false);
      // crear una categoria y enviarla a la API
      const categoriaNueva = {
        nombre: nombre,
        descripcion: descripcion,
      };
      try {
        const respuesta = await fetch(URL_CAT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoriaNueva),
        });
        console.log(respuesta);
        if (respuesta.status === 201) {
          
          // mostrar cartel al usuario
          Swal.fire(
            "Categoria Creada!",
            "La Categoria se creo correctamente",
            "success"
          );
          // resetear el formulario
          e.target.reset(); //el e.target en este caso por el submitt es el form
          // volver a pedir a la API
          props.consultaAPICat();
        } else {
          console.log("mostrar cartel de error");
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
                    maxLength="30"
                    required
                    onChange={(e) => setNombre(e.target.value)}
                  />

                  <Form.Label className="mb-4">Descripción</Form.Label>
                  <Form.Control
                    className="mb-4"
                    as="textarea"
                    placeholder="Describa la categoria brevemente aqui..."
                    maxLength="80"
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                  <Form.Text className="text-muted mb-4">
                    La descripción se puede obviar, pero en algunos temas es
                    útil.
                  </Form.Text>
                </Form>

                  <button form="formCategorias" type="submit" className="my-4 btn btn-primary">
                    Agregar Nueva Categoria
                  </button>
                {error === true ? (
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
                      key={categorias.id}
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

export default Categorias;
