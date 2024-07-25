//inicioArreglo es la posición inicial.
function sumaDeArreglos(arreglo: number[], inicioArreglo: number = 0): number {
    //el length tiene casi la misma función del join pero dice que con el length se obtienen mientras
    //que el otro une.
    if (inicioArreglo >= arreglo.length) {
        return 0;
    }
    //aca abajo se hace una funcion recursiva y el +1 es como para decir que pase de arreglo
    //para hacer la suma me supongo.
    return arreglo[inicioArreglo] + sumaDeArreglos(arreglo, inicioArreglo + 1);
}
// aquí se están pidiendo exactamente 5 números con una funcion repetitiva como lo es
//el for.
function pedirNumeros(): number[] {
    const numeros: number[] = [];
    let entrada: string | null;

    for (let i = 0; i < 5; i++) {
        entrada = prompt(`Ingresa el primer numero ${i + 1}:`);
        if (entrada === null) {
            alert('No haz ingresado correctamente');
            return numeros;
        }
        const numero = parseFloat(entrada);
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert('Por favor, introduce un número válido.');
            i--; 
           //la alerta tambien usamos era para que salga de igual forma un mensaje 
        }
    }
    return numeros;
}
export const Arreglo = () => {
    const arregloNumeros = pedirNumeros();
    const suma = sumaDeArreglos(arregloNumeros);

    return (
        //join se usa para unir todos los elementos de un arreglo en una sola.
        //la coma y las comillas simples eran para que se separen los números y no
        //salga todo junto.
        <div> 
            <h1>Arreglo Segundo Ejercicio</h1>
            <p>El arreglo es: {arregloNumeros.join(', ')}</p> 
            <p>La suma de los elementos del arreglo es {suma}.</p>
        </div>
    );
};
