import React from "react";
import { Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./../pages/PaginaPrincipal/PaginaPrincipal";
import SobreNosotros from "./../pages/SobreNosotros"
import Contacto from "./../pages/Contacto";
import Error404 from "./../pages/Error404";
import PostsXCategoria from "../pages/PostsXCategoria";
import PostSolo from "./../pages/PostSolo";

const InicioMain = () => {
  

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<PaginaPrincipal></PaginaPrincipal>}
      ></Route>

      <Route
        exact
        path="/acercadenosotros"
        element={<SobreNosotros></SobreNosotros>}
      ></Route>

      <Route
        exact
        path="/:categoria"
        element={<PostsXCategoria></PostsXCategoria>}
      ></Route>
      <Route exact path="/noticia/:id" element={<PostSolo></PostSolo>}></Route>

      <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
      <Route exact path="/error404" element={<Error404></Error404>}></Route>
    </Routes>
  );
};

export default InicioMain;
