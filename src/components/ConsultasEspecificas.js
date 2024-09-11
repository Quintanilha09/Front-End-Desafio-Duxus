import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ConsultasEspecificas.css';

const ConsultasEspecificas = () => {
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [data, setData] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleFuncaoMaisComum = async () => {
        try {
            const response = await axios.get('http://localhost:8080/funcao-mais-comum', {
                params: { dataInicial, dataFinal }
            });
            setResultado({ type: 'Função Mais Comum', data: response.data });
        } catch (error) {
            alert('Erro ao consultar função mais comum.');
        }
    };

    const handleFranquiaMaisFamosa = async () => {
        try {
            const response = await axios.get('http://localhost:8080/franquia-mais-famosa', {
                params: { dataInicial, dataFinal }
            });
            setResultado({ type: 'Franquia Mais Famosa', data: response.data });
        } catch (error) {
            alert('Erro ao consultar franquia mais famosa.');
        }
    };

    const handleContagemPorFranquia = async () => {
        try {
            const response = await axios.get('http://localhost:8080/contagem-por-franquia', {
                params: { dataInicial, dataFinal }
            });
            setResultado({ type: 'Contagem por Franquia', data: response.data });
        } catch (error) {
            alert('Erro ao consultar contagem por franquia.');
        }
    };

    const handleContagemPorFuncao = async () => {
        try {
            const response = await axios.get('http://localhost:8080/contagem-por-funcao', {
                params: { dataInicial, dataFinal }
            });
            setResultado({ type: 'Contagem por Função', data: response.data });
        } catch (error) {
            alert('Erro ao consultar contagem por função.');
        }
    };

    const handleIntegranteMaisUsado = async () => {
        try {
            const response = await axios.get('http://localhost:8080/integrante-mais-usado', {
                params: { dataInicial, dataFinal }
            });
            setResultado({ type: 'Integrante Mais Usado', data: response.data });
        } catch (error) {
            alert('Erro ao consultar integrante mais usado.');
        }
    };

    const handleTimesDaData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/times/data', {
                params: { data }
            });
            setResultado({ type: 'Times da Data', data: response.data });
        } catch (error) {
            alert('Erro ao consultar times da data.');
        }
    };

    const handleTimeMaisComum = async () => {
        try {
            const response = await axios.get('http://localhost:8080/time-mais-comum', {
                params: { dataInicial, dataFinal }
            });
            setResultado({ type: 'Time Mais Comum', data: response.data });
        } catch (error) {
            alert('Erro ao consultar time mais comum.');
        }
    };

    return (
        <div className="container">
            <h2>Consultas Específicas</h2>
            <section>
                <h3>Função Mais Comum</h3>
                <input
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                />
                <input
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                />
                <button onClick={handleFuncaoMaisComum}>Buscar Função Mais Comum</button>
            </section>
            <section>
                <h3>Franquia Mais Famosa</h3>
                <input
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                />
                <input
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                />
                <button onClick={handleFranquiaMaisFamosa}>Buscar Franquia Mais Famosa</button>
            </section>
            <section>
                <h3>Contagem por Franquia</h3>
                <input
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                />
                <input
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                />
                <button onClick={handleContagemPorFranquia}>Buscar Contagem por Franquia</button>
            </section>
            <section>
                <h3>Contagem por Função</h3>
                <input
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                />
                <input
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                />
                <button onClick={handleContagemPorFuncao}>Buscar Contagem por Função</button>
            </section>
            <section>
                <h3>Integrante Mais Usado</h3>
                <input
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                />
                <input
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                />
                <button onClick={handleIntegranteMaisUsado}>Buscar Integrante Mais Usado</button>
            </section>
            <section>
                <h3>Times da Data</h3>
                <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button onClick={handleTimesDaData}>Buscar Times da Data</button>
            </section>
            <section>
                <h3>Time Mais Comum</h3>
                <input
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                />
                <input
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                />
                <button onClick={handleTimeMaisComum}>Buscar Time Mais Comum</button>
            </section>
            {resultado && (
                <section className="resultado">
                    <h3>{resultado.type}</h3>
                    <div className="resultado-content">
                        {typeof resultado.data === 'object' ? (
                            Array.isArray(resultado.data) ? (
                                <ul>
                                    {resultado.data.map((item, index) => (
                                        <li key={index}>{JSON.stringify(item, null, 2)}</li>
                                    ))}
                                </ul>
                            ) : (
                                <pre>{JSON.stringify(resultado.data, null, 2)}</pre>
                            )
                        ) : (
                            <p>{resultado.data}</p>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ConsultasEspecificas;
