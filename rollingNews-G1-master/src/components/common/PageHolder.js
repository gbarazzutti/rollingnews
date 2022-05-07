import React, { useState, useEffect } from "react";
import AdminError404 from "../pages/AdminError404";
import { Routes, Route } from "react-router-dom";
import AgregarNoticia from "../noticias/AgregarNoticia";
import TablaNoticias from "../noticias/TablaNoticias";
import Categorias from "../noticias/Categorias";
import EditarNoticia from "../noticias/EditarNoticia";
import EditarCategoria from "../noticias/EditarCategoria";
import Dashboard from "../pages/Dashboard";

const PageHolder = () => {
  const URL = process.env.REACT_APP_API_URL+"/noticias/";
  const URL_CAT = process.env.REACT_APP_API_URL+"/categorias/";
  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    consultaAPI();
    consultaAPICat();
  }, []);

  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
    
      setNoticias(datos);
    } catch (error) {
      console.log(error);
    }
  };
  const consultaAPICat = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL_CAT);
      const datos = await respuesta.json();
    
      setCategorias(datos);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="page-holder bg-gray-100">
      <div className="px-lg-4 px-xl-5 container-fluid" id="page-container">
        <Routes>
          <Route
            exact
            path="/admin/error404"
            element={<AdminError404></AdminError404>}
          ></Route>
          <Route
            exact
            path="/admin/"
            element={<Dashboard></Dashboard>}
          ></Route>
          <Route
            exact
            path="/admin/CMS/noticias"
            element={
              <TablaNoticias
                noticias={noticias}
                consultaAPI={consultaAPI}
              ></TablaNoticias>
            }
          ></Route>
          <Route
            exact
            path="/admin/CMS/noticias/agregarNoticia"
            element={
              <AgregarNoticia consultaAPI={consultaAPI} categorias={categorias} consultaAPICat={consultaAPICat}></AgregarNoticia>
            }
          ></Route>
          <Route
            exact
            path="/noticias/editar/:id"
            element={<EditarNoticia consultaAPI={consultaAPI} categorias={categorias} consultaAPICat={consultaAPICat}></EditarNoticia>}
          ></Route>
          <Route
            exact
            path="/admin/CMS/categorias"
            element={<Categorias categorias={categorias} consultaAPICat={consultaAPICat}></Categorias>}
          ></Route>
           <Route
            exact
            path="/categorias/editar/:id"
            element={<EditarCategoria categorias={categorias} consultaAPICat={consultaAPICat}></EditarCategoria>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default PageHolder;
