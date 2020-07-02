import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            city,
            uf,
        }

        try{
            const response = await api.post('airlines', data);
            alert(`ID de acesso: ${response.data.id}`);
            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="FGAirlines" />

                    <h1>Cadastro</h1>
                    <p>Cadastre sua linha aérea e começe a ajudar pessoas a encontrarem suas promoções agora mesmo!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#17333C" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da linha aérea" 
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Senha" 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <input placeholder="Cidade" 
                        value={city}
                        onChange={e=>setCity(e.target.value)}
                    />
                    <div className="form-group">
                        <input placeholder="UF" style={{ width: 80 }} 
                            value={uf}
                            onChange={e=>setUf(e.target.value)}
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                    
                        
                </form>
            </div>
        </div>
    );
}