import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/AtualizarIntegrante.css';

const AtualizarIntegrante = () => {
    const [id, setId] = useState('');
    const [integranteDto, setIntegranteDto] = useState({ nome: '', funcao: '' });
    const [resultado, setResultado] = useState(null);

    const handleAtualizar = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/integrante/atualizar/${id}`, integranteDto);
            setResultado(response.data);
        } catch (error) {
            alert('Erro ao atualizar integrante.');
        }
    };

    return (
        <div>
            <h2>Atualizar Integrante</h2>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID do Integrante"
            />
            <input
                type="text"
                value={integranteDto.nome}
                onChange={(e) => setIntegranteDto({ ...integranteDto, nome: e.target.value })}
                placeholder="Nome"
            />
            <input
                type="text"
                value={integranteDto.funcao}
                onChange={(e) => setIntegranteDto({ ...integranteDto, funcao: e.target.value })}
                placeholder="Função"
            />
            <button onClick={handleAtualizar}>Atualizar</button>
            {resultado && (
                <div>
                    <h3>Resultado</h3>
                    <pre>{JSON.stringify(resultado, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AtualizarIntegrante;
