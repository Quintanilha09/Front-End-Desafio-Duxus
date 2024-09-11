import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/BuscarTime.css';

const BuscarTimePorId = () => {
    const [id, setId] = useState('');
    const [time, setTime] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/time/${id}`);
            setTime(response.data);
        } catch (error) {
            alert('Erro ao buscar time.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID do Time" required />
                <button type="submit">Buscar Time</button>
            </form>
            {time && (
                <div>
                    <h2>Time</h2>
                    <p>Data: {time.data}</p>
                    <p>IDs dos Integrantes: {time.idsIntegrantes.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default BuscarTimePorId;
