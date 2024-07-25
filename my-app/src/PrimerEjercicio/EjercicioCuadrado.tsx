
import React, { useState } from 'react';

export const EjercicioCuadrado = () => {
    const [lado, setLado] = useState<number>(0);
    //aca use el prompt para que aparezca el mensaje en la parte superior de la página
    const pedirValorLado = () => {
        const valor = prompt("Ingresa el valor del lado del cuadrado:");
        const numero = Number(valor);
        // el && dice que sirve para hacer una como comparacion entre los dos pero
        //si ambos valores son verdaderos devuelve verdadero de lo contrario 
        //devuelve falso.
        if ((numero) && numero >= 0) {
            setLado(numero);
        }
    };
    return (
        //el onclick es para los botones, el p era para poner parrafos donde
        //soliamos poner el lorem de ahí normalmente se hace la operacion.
        <div>
            <h1>Ejercicio Cuadrado</h1>
            <button onClick={pedirValorLado}>Ingresar lado</button>
            <p>El área del cuadrado con lado {lado} es {lado * lado}.</p>
        </div>
    );
};

