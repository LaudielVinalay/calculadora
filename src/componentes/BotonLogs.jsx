import React from "react";
import '../stylesheets/Botones.css'

function BotonLogs(props){
    return(
        <div className="Boton" onClick={() => props.Log(props.children)}>
            {props.children}
        </div>
    );
}

export default BotonLogs;