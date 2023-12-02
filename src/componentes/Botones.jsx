import React from "react";
import '../stylesheets/Botones.css';

function Botones(props){
    return(
        <div className="Boton">
            {props.children}
        </div>
    )
}

export default Botones;