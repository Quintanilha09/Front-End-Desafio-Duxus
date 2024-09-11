import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/ListarTimes.css';

const ListarTimes = () => {
    const [times, setTimes] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTimes = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/time/listar');
            setTimes(response.data);
        } catch (error) {
            alert('Erro ao listar times.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <button onClick={fetchTimes} disabled={loading}>
                {loading ? 'Carregando...' : 'Listar Times'}
            </button>
            <div className="lista-container">
                <ul>
                    {times.map(time => (
                        <li key={time.id}>
                            <strong>ID:</strong> {time.id} <br />
                            <strong>Data:</strong> {time.data} <br />
                            <strong>IDs dos Integrantes:</strong> {(time.composicaoTime.map(ct => ct.integrante.id)).join(', ')}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListarTimes;
