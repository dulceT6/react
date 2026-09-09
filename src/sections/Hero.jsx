import { useState } from "react";
import button from "../assets/components/Button";

function hero (){
    const [variableButon, setVariableBoton]=useState(true)

    return(
    <>
    <hero>
    <button onClick={()=> setVariableBoton(!variableBoton)}></button>

    </hero>
    
    
    
    </>

    )
}
