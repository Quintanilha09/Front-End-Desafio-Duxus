import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/CadastrarIntegrante.css';


const CadastrarIntegrante = () => {
    const [nome, setNome] = useState('');
    const [franquia, setFranquia] = useState('');
    const [funcao, setFuncao] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/integrante/cadastrar', {
                nome,
                franquia,
                funcao
            });
            setMensagem('Integrante cadastrado com sucesso!');
            setNome('');
            setFranquia('');
            setFuncao('');

            // Remove a mensagem após 5 segundos
            setTimeout(() => {
                setMensagem('');
            }, 5000);
        } catch (error) {
            setMensagem('Erro ao cadastrar integrante.');
            // Remove a mensagem após 5 segundos
            setTimeout(() => {
                setMensagem('');
            }, 5000);
        }
    };

    return (
        <div className="cadastrar-integrante-container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
                <input type="text" value={franquia} onChange={(e) => setFranquia(e.target.value)} placeholder="Franquia" required />
                <input type="text" value={funcao} onChange={(e) => setFuncao(e.target.value)} placeholder="Função" required />
                <button type="submit">Cadastrar Integrante</button>
            </form>
            {mensagem && (
                <div className="mensagem">
                    {mensagem}
                </div>
            )}
        </div>
    );
};

export default CadastrarIntegrante;
