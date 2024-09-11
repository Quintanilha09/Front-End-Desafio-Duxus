import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import CadastrarIntegrante from './components/integrante/CadastrarIntegrante';
import CadastrarTime from './components/time/CadastrarTime';
import ListarIntegrante from './components/integrante/ListarIntegrante';
import ListarTime from './components/time/ListarTime';
import AtualizarIntegrante from './components/integrante/AtualizarIntegrante';
import BuscarIntegrante from './components/integrante/BuscarIntegrante';
import DeletarIntegrante from './components/integrante/DeletarIntegrante';
import AtualizarTime from './components/time/AtualizarTime';
import BuscarTimePorId from './components/time/BuscarTimePorId';
import DeletarTime from './components/time/DeletarTime';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/cadastrar-integrante">Cadastrar Integrante</Link>
                    <Link to="/cadastrar-time">Cadastrar Time</Link>
                    <Link to="/listar-integrantes">Listar Integrantes</Link>
                    <Link to="/listar-times">Listar Times</Link>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/cadastrar-integrante" element={<CadastrarIntegrante />} />
                        <Route path="/cadastrar-time" element={<CadastrarTime />} />
                        <Route path="/listar-integrantes" element={<ListarIntegrante />} />
                        <Route path="/listar-times" element={<ListarTime />} />
                        <Route path="/atualizar-integrante" element={<AtualizarIntegrante />} />
                        <Route path="/buscar-integrante" element={<BuscarIntegrante />} />
                        <Route path="/deletar-integrante" element={<DeletarIntegrante />} />
                        <Route path="/atualizar-time" element={<AtualizarTime />} />
                        <Route path="/buscar-time" element={<BuscarTimePorId />} />
                        <Route path="/deletar-time" element={<DeletarTime />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
