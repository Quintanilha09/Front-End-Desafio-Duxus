import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/ListarIntegrantes.css';

const ListarIntegrantes = () => {
    const [integrantes, setIntegrantes] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchIntegrantes = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/integrante/listar');
            setIntegrantes(response.data);
        } catch (error) {
            alert('Erro ao listar integrantes.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <button onClick={fetchIntegrantes} disabled={loading}>
                {loading ? 'Carregando...' : 'Listar Integrantes'}
            </button>
            <div className="lista-container">
                <ul>
                    {integrantes.map(integrante => (
                        <li key={integrante.id}>
                            <strong>ID:</strong> {integrante.id} <br />
                            <strong>Nome:</strong> {integrante.nome} <br />
                            <strong>Franquia:</strong> {integrante.franquia} <br />
                            <strong>Função:</strong> {integrante.funcao}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListarIntegrantes;
