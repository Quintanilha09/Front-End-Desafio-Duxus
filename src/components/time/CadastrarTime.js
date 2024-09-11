import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/CadastrarTime.css'; 

const CadastrarTime = () => {
    const [data, setData] = useState('');
    const [idsIntegrantes, setIdsIntegrantes] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/time/cadastrar', {
                data,
                idsIntegrantes: idsIntegrantes.split(',').map(id => parseInt(id))
            });
            setMensagem('Time cadastrado com sucesso!');
            setData('');
            setIdsIntegrantes('');
            
            // Remove a mensagem após 5 segundos
            setTimeout(() => {
                setMensagem('');
            }, 5000);
        } catch (error) {
            setMensagem('Erro ao cadastrar time.');
            // Remove a mensagem após 5 segundos
            setTimeout(() => {
                setMensagem('');
            }, 5000);
        }
    };

    return (
        <div className="cadastrar-time-container">
            <form onSubmit={handleSubmit}>
                <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
                <input type="text" value={idsIntegrantes} onChange={(e) => setIdsIntegrantes(e.target.value)} placeholder="IDs dos Integrantes (separados por vírgula)" required />
                <button type="submit">Cadastrar Time</button>
            </form>
            {mensagem && (
                <div className="mensagem">
                    {mensagem}
                </div>
            )}
        </div>
    );
};


export default CadastrarTime;
