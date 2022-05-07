import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoticiasXcategoria from "./NoticiasXcategoria";
import NoticiasPrincipales from "./NoticiasPrincipales";

const CuerpoPag = () => {
  return (
    <Fragment>
        <NoticiasPrincipales></NoticiasPrincipales>
        <NoticiasXcategoria></NoticiasXcategoria>
    </Fragment>
  );
};

export default CuerpoPag;
