import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/DeletarTime.css'; 

const DeletarTime = () => {
    const [id, setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/time/deletar/${id}`);
            alert('Time deletado com sucesso!');
            setId('');
        } catch (error) {
            alert('Erro ao deletar time.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID do Time" required />
            <button type="submit">Deletar Time</button>
        </form>
    );
};

export default DeletarTime;
