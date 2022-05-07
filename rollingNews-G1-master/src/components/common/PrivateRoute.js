import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const PrivateRoute = ({children }) => {
    const URL = process.env.REACT_APP_API_URL+"/isUserAuth";

    //verifico si hay un usuario logueado
    const user =  localStorage.getItem('accessToken');

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        consultaAPI();
      }, []);
     
      const consultaAPI = async () => {
        try {
          const respuesta = await fetch(URL,  {
            method: "GET",
            headers: {
              "x-access-token": user,
            }
          });
          const datos = await respuesta.json();
          //console.log(datos)
          setIsAuthenticated(datos.auth);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        isAuthenticated ? children : (
        <> <h2 className="text-center text-danger my-5">Usted no está autorizado para acceder a esta página</h2>
            <div className="text-center"> <Link className="btn btn-primary" to="/">
              Volver a Inicio
            </Link></div>
         </>)
    );
};

export default PrivateRoute;