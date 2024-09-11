import React from 'react';
import { Link } from 'react-router-dom';
import ConsultasEspecificas from '../ConsultasEspecificas';
import '../../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Gerenciamento de Times</h1>
            <div className="button-container">
                <Link to="/cadastrar-integrante" className="nav-button">Cadastrar Integrante</Link>
                <Link to="/cadastrar-time" className="nav-button">Cadastrar Time</Link>
            </div>
            <ConsultasEspecificas />
        </div>
    );
};

export default HomePage;
