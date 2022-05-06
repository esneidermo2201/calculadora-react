import React from "react"
import freeCodeCampLogo from '../imagenes/FreeCodeCampLogo.png';

function Logo({ Logo }) {
    return (
        <div className='freeCodeCamp-logo-contenedor'>
            <img
                src={freeCodeCampLogo}
                className='freecodecamp-logo'
                alt="logo fcc" />
        </div>

    );
}

export default Logo;