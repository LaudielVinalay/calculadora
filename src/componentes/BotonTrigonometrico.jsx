import React from "react";
import '../stylesheets/Botones.css'

function BotonTrig(props){
    return(
        <div className="Boton" onClick={() => props.EvalTrig(props.children)}>
            {props.children}
        </div>
    )

}

export default BotonTrig;