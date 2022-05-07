import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const ItemCategoria = (props) => {
    const URL_CAT = process.env.REACT_APP_API_URL+'/categorias/'+props.categorias._id;

    const eliminarCategoria=  ()=> {
     // console.log('desde borrar')
        Swal.fire({
          title: '¿Esta seguro de eliminar esta categoria?',
          text: "No podrá recuperarla una vez eliminada",
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
                  const respuesta = await fetch(URL_CAT,{ 
                      method: 'DELETE',
                      headers: {
                     'Content-Type': 'application/json'
                    }
                  });
                  console.log(respuesta);
                  if(respuesta.status === 200){
                      console.log('La categoria se eliminó correctamente');
                      // mostrar cartel al usuario
                      Swal.fire(
                        'categoria Eliminada!',
                        'Su categoria se eliminó correctamente',
                        'success'
                      )
                      // volver a pedir a la API para recargar la tabla de categorias
                      props.consultaAPICat();
                      
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
             <tr key={props.categorias._id}>
                  <td>
                    <strong className="d-block text-wrap">
                      {props.categorias.nombre}
                    </strong>
                  </td>
                  <td>{props.categorias.descripcion}</td>
                  <td>
                    <ButtonGroup>
                    <Link
                      className="btn btn-warning ms-2"
                      to={`/rn/categorias/editar/${props.categorias._id}`}
                    >
                      <i className="bi bi-pencil mb-2"></i>
                    </Link>
                    <Button
                      className="ms-2"
                      variant="danger"
                      onClick={() => eliminarCategoria()}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                    </ButtonGroup>
                  </td>
                </tr>
        </>
    );
};

export default ItemCategoria;