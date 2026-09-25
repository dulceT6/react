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
    <h2>top 5-Telecaster deluxe</h2>
    <img src="./61u7rrwk3sL.jpg" alt="telecaster deluxe" width="400"/>
    <p>me gusta esta guitarra por su versatilidad sonora y su simpleza  </p>
    <h2>top 4-Gibson Les Paul</h2>
    <img  src="/gibson.webp" alt="Gibson Les Paul" width="400"/> 
    </>
    )
}
 export default Hero