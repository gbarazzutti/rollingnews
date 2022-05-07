import React from 'react';
import Footer from './Footer';
import InicioMain from './InicioMain';
import Navigation from './Navigation';

const Inicio = () => {
    return (
        <>
           <Navigation></Navigation> 
           <InicioMain></InicioMain>
           <Footer></Footer>
        </>
    );
};

export default Inicio;