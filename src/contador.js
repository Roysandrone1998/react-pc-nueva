import React, { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);  // Declaración y uso de estado

    const handleClik = () => {
        setContador(contador + 1);  // Actualización del estado
    }

    return (
        <div>
            <p>contador: {contador}</p>
            <button onClick={handleClik}>click</button>
        </div>
    );
}

export default Contador;
