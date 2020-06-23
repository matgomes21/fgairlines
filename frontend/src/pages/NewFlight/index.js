import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg'

export default function NewFlight() {
    return (
        <div className="new-flight-container">
            <div className="content">
                <section>
                    <img src={logo} alt="FGAirlines" />

                    <h1>Cadastrar novo voo</h1>
                    <p>Cadastre um novo voo e coloque-o para venda agora mesmo!</p>

                    <Link className="back-link" to="/flights">
                        <FiArrowLeft size={16} color="#17333C" />
                        Voltar
                    </Link>
                </section>

                <form>
                    <input placeholder="Destino" />
                    <div className="form-group">
                        <input placeholder="Data" />
                        <input placeholder="Hora" />
                    </div>
                    <input placeholder="Valor (em reais)" />
                    <button type="button">Cadastrar</button>
                    
                        
                </form>
            </div>
        </div>
    );
}