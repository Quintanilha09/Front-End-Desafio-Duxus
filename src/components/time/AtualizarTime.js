import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/AtualizarTime.css';

const AtualizarTime = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [idsIntegrantes, setIdsIntegrantes] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8080/time/atualizar/${id}`, {
                data,
                idsIntegrantes: idsIntegrantes.split(',').map(id => parseInt(id))
            });
            alert('Time atualizado com sucesso!');
            setId('');
            setData('');
            setIdsIntegrantes('');
        } catch (error) {
            alert('Erro ao atualizar time.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID do Time" required />
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
            <input type="text" value={idsIntegrantes} onChange={(e) => setIdsIntegrantes(e.target.value)} placeholder="IDs dos Integrantes (separados por vírgula)" required />
            <button type="submit">Atualizar Time</button>
        </form>
    );
};

export default AtualizarTime;
