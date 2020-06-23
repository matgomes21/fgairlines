import React from 'react';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import './styles.css';

import logo from '../../assets/big-logo.svg';
import plane from '../../assets/big-plane.svg'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="FGAirlines" />
                
                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiUserPlus size={16} color="#17333C" />
                        Não tem cadastro? Registre-se
                    </Link>
                </form>
            </section>

            <img className="big-plane" src={plane} alt="Airplane" />
        </div>
    );
}