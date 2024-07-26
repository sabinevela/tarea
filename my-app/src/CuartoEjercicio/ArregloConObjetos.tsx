import React, { useState } from 'react';
//siempre que tenga un objeto se crea una interface
interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

const listadeAlumnos: Alumno[] = [
    {
        nombre: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        nombre: "Wendy",
        edad: 20,
        calificacion: 8,
    },
    {
        nombre: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];
//la funcion reduce es para que el arreglo se transforme en uno solo
//esto significa que el promedio se vuelve uno solo con la operacion
const Promedio = (alumnos: Alumno[]): number => {
    const totalCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
    const promedio = totalCalificaciones / alumnos.length;
    return promedio;
}

export const ArregloConObjetos = () => {
    const [alumnos, setAlumnos] = useState<Alumno[]>(listadeAlumnos);

     //en esta funcion vale agregar ya sea nombres o letras solamente se detendrá la ejecución
     //de las siguientes ventanas si no se agrega nada o se da en eso de cancelar en el boton.
    const agregarAlumno = () => {
        const nombre = prompt("Ingrese el nombre del alumno:");
        if (!nombre) 
            return;
        
        const calificaciones = prompt("Ingrese la calificación del alumno:");
        if (!calificaciones) 
            return;
        //el isnan es para hacer más fácil una comparación si no es un valor numérico
        //va a saltar la alerta de calificacion invalida.
        const calificacion = parseFloat(calificaciones);
        if (isNaN(calificacion)) {
            alert("Calificación inválida");
            return;
        }

        const nuevoAlumno: Alumno = { nombre, edad: 0, calificacion };
        setAlumnos([...alumnos, nuevoAlumno]);
    }

    const promedio = Promedio(alumnos);

    return (
        //el index es parte de la funcion map que ayuda a que la funcion map transforme 
        //el arreglo, también contenía un li key que es para darle una clave unica 
        //pero no entendí mucho así que le borre, en resumen el index tambien es para
        //conocer una posicion exacta en el arreglo.
        <div>
            <h1>Arreglo Con Objetos</h1>
            <button onClick={agregarAlumno}>Agregar Alumno</button>
            <p>El promedio de calificaciones es: {promedio}</p>
            <div>
                <h2>Lista de Alumnos</h2>
                <ul>
                    {alumnos.map((alumno, index) => (
                        <li>
                            {alumno.nombre} - Calificación: {alumno.calificacion}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
