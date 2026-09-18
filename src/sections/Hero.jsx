import { useState } from "react";
import button from "../components/Button";

function Hero (){
    const [variableButon, setVariableBoton]=useState(true)

    return(
    <>

    <div className="pepe">
    <h1>top 5 guitarras que me gustan</h1>

    <h2>guitarras electricas</h2>
    </div>
    <p>en este top vamos a ver 5 mejores guitarras que me gustan,desde la que considero en mi opinion las mas linda esteticamente </p>
    <h2>top 5-telecaster deluxe</h2>
    <img src="./61u7rrwk3sL.jpg" alt="telecaster deluxe" width="100"/>
    <p>me gusta esta guitarra por su forma y su estruc</p>
    </>

    )
}
 export default Hero