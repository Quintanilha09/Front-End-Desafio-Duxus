import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/BuscarIntegrante.css';

const BuscarIntegrante = () => {
    const [id, setId] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleBuscar = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/integrante/${id}`);
            setResultado(response.data);
        } catch (error) {
            alert('Erro ao buscar integrante.');
        }
    };

    return (
        <div>
            <h2>Buscar Integrante</h2>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID do Integrante"
            />
            <button onClick={handleBuscar}>Buscar</button>
            {resultado && (
                <div>
                    <h3>Resultado</h3>
                    <pre>{JSON.stringify(resultado, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default BuscarIntegrante;
