import React from 'react';
import imagenFondo from '../assets/images/warning-404-error.jpg';

function NotFound(){
    return(
        <div className="text-center">
            <h1>Ups! Error 404</h1>
            <h1>Página no encontrada :(</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}


export default NotFound;