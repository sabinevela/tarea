import React, { useState } from 'react';

export const BotonesEjercicio = () => {
    // aqui se inicializa desde el numero 5
    const [acumulador, setAcumulador] = useState<number>(5);

    // esta funcion sirve para darle paso a que el boton aumente la cantidad 
    const incrementar = () => {
        setAcumulador(acumulador + 1);
    };

    // aqui igualmente es la misma funcion pero con la diferencia de que hace que el boton disminuya la cantidad
    const disminuir = () => {
        setAcumulador(acumulador - 1);
    };

    return (
        <div>
            <h1>Acumulador</h1>
            <p>Valor del acumulador: {acumulador}</p>
            <button className="btn btn-primary" onClick={incrementar}>Aumentar</button>
            &nbsp;
            <button className="btn btn-primary" onClick={disminuir}>Disminuir</button>
        </div>
    );
};


