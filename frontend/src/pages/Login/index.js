import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import logo from '../../assets/big-logo.svg';
import plane from '../../assets/big-plane.svg'

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('airlineId', id);
            localStorage.setItem('airlineName', response.data.name);

            history.push('/profile');
        } catch(err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="FGAirlines" />
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID" 
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    />
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