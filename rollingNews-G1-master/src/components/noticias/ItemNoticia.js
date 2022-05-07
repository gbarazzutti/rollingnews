import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const ItemNoticia = (props) => {
    
    const URL = process.env.REACT_APP_API_URL+'/noticias/'+props.noticias._id;

    const eliminarNoticia=  ()=> {
     // console.log('desde borrar')
        Swal.fire({
          title: '¿Esta seguro de eliminar esta noticia?',
          text: "No podrá recuperar la noticia una vez eliminada",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Borrar',
          cancelButtonText: 'Cancelar'
        }).then(async (result) => {
          if (result.isConfirmed) {
              //aqui borro la noticia
              try {
                  const respuesta = await fetch(URL,{ 
                      method: 'DELETE',
                      headers: {
                     'Content-Type': 'application/json'
                    }
                  });
                  console.log(respuesta);
                  if(respuesta.status === 200){
                      console.log('La noticia se eliminó correctamente');
                      // mostrar cartel al usuario
                      Swal.fire(
                        'Noticia Eliminada!',
                        'Su Noticia se eliminó correctamente',
                        'success'
                      )
                      // volver a pedir a la API para recargar la tabla de noticias
                      props.consultaAPI();
                      
                    }else{
                      console.log('mostrar cartel de error')
                    }
              } catch (error) {
                  console.log(error);
              }
          }
        })
      }
    
    return (
        <>
             <tr key={props.noticias._id}>
                  <td>
                    <div
                      className="d-inline-block me-3"
                      style={{ width: "100px" }}
                    >
                      <div
                        style={{
                          display: "block",
                          overflow: "hidden",
                          position: "relative",
                          boxSizing: "border-box",
                          margin: "0",
                        }}
                      >
                        <div
                          style={{
                            display: "block",
                            boxSizing: "border-box",
                            paddingTop: "66%",
                          }}
                        ></div>
                        <img
                          alt={props.noticias.titulo}
                          sizes="100px"
                          srcset={props.noticias.imagen}
                          decoding="async"
                          data-nimg="true"
                          className="img-fluid rounded"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        ></img>
                      </div>
                    </div>
                    <strong className="d-block text-wrap">
                      {props.noticias.titulo}
                    </strong>
                  </td>
                  <td>{props.noticias.categoria}</td>
                  <td>{props.noticias.autor}</td>
                  <td>{props.noticias.fecha}</td>
                  <td>
                    <ButtonGroup>
                    <Link
                      className="btn btn-warning ms-2"
                      to={`/rn/noticias/editar/${props.noticias._id}`}
                    >
                      <i className="bi bi-pencil mb-2"></i>
                    </Link>
                    <Button
                      className="ms-2"
                      variant="danger"
                      onClick={() => eliminarNoticia()}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                    </ButtonGroup>
                  </td>
                </tr>
        </>
    );
};

export default ItemNoticia;