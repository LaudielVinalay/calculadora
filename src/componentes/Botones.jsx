import React from "react";
import '../stylesheets/Botones.css';

function Botones(props){
    return(
        <div className="Boton" onClick={() => props.Click(props.children)}>
            {props.children}
        </div>
    )
}

export default Botones;