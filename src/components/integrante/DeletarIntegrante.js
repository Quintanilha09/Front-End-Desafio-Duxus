import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/DeletarIntegrante.css';

const DeletarIntegrante = () => {
    const [id, setId] = useState('');

    const handleDeletar = async () => {
        try {
            await axios.delete(`http://localhost:8080/integrante/excluir/${id}`);
            alert('Integrante excluído com sucesso.');
        } catch (error) {
            alert('Erro ao excluir integrante.');
        }
    };

    return (
        <div>
            <h2>Deletar Integrante</h2>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID do Integrante"
            />
            <button onClick={handleDeletar}>Deletar</button>
        </div>
    );
};

export default DeletarIntegrante;
