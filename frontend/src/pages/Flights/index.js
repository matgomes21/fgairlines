import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Flights() {
    return(
        <div className="flights-container">
            <header>
                <img src={logo} alt="FGAirlines" />
                
                <Link className="button" to="/flights/new">Cadastrar novo voo</Link>
                <button type="button">
                    <FiPower size={24} color="#ffffff" />
                </button>
            </header>

            <h1>Voos Disponíveis</h1>

            <ul>
                <li>
                    <strong>DESTINO:</strong>
                    <p>Destino teste</p>

                    <strong>DATA/HORA:</strong>
                    <p>Maia corno</p>

                    <strong>PREÇO:</strong>
                    <p>R$ 777,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#17333C" />
                    </button>
                </li>
                <li>
                    <strong>DESTINO:</strong>
                    <p>Destino teste</p>

                    <strong>DATA/HORA:</strong>
                    <p>Maia corno</p>

                    <strong>PREÇO:</strong>
                    <p>R$ 777,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#17333C" />
                    </button>
                </li>
                <li>
                    <strong>DESTINO:</strong>
                    <p>Destino teste</p>

                    <strong>DATA/HORA:</strong>
                    <p>Maia corno</p>

                    <strong>PREÇO:</strong>
                    <p>R$ 777,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#17333C" />
                    </button>
                </li>
                <li>
                    <strong>DESTINO:</strong>
                    <p>Destino teste</p>

                    <strong>DATA/HORA:</strong>
                    <p>Maia corno</p>

                    <strong>PREÇO:</strong>
                    <p>R$ 777,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#17333C" />
                    </button>
                </li>
            </ul>
        </div>
    );
}