import React from "react";
import '../stylesheets/Botones.css';

function BotonBorrar(props){
    return(
        <div className="Boton" onClick={props.BorrarCaracter}>
            {props.children}
        </div>
    )
}

export default BotonBorrar;