
//bueno, dice que la funcion map hace que los arreglos cambien seria como un useState pero de una forma un poco mas facil en palabras mas tecnicas permimte modificar un arreglo  con los resultados de aplicar una función a cada uno de los elementos del arreglo original.
import React, { useState, useEffect } from 'react';
//en esta funcion es donde se piden numeros al usuario, tambien se uso una estructura repetitiva como lo es for para que se repita o salga 5 veces los mensajes para pedir los numeros.
function pedirNumeros(cantidad: number): number[] {
    const numeros: number[] = [];
    let entrada: string | null;
    for (let i = 0; i < cantidad; i++) {
        entrada = prompt(`Ingrese el primer numero: ${i + 1}:`);
        if (entrada === null) {
            alert('No haz ingresado correctamente');
            return numeros; 
        }
        //el push funciona casi igual como en git tambien es para enviar 
        const numero = parseFloat(entrada);
        if ((numero)) {
            numeros.push(numero);
        } else {
            alert('Por favor, introduce un número válido.');
        }
    }
    return numeros;
}
export const ArregloConMap = () => {
    const [arregloNumeros, setArregloNumeros] = useState<number[]>([]);
    const [arregloDividido, setArregloDividido] = useState<number[]>([]);

    useEffect(() => {
        const numeros = pedirNumeros(5);
        setArregloNumeros(numeros);
        setArregloDividido(numeros.map(valor => valor / 5));
    }, []);

    return (
        <div>
            <h1>Arreglo con map</h1>
            <p>Arreglo original: {arregloNumeros.join(', ')}</p>
            <p>Arreglo dividido por 5: {arregloDividido.join(', ')}</p>
        </div>
    );
};
