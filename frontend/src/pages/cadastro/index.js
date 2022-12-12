import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import api from '../../services/api';

import './style.css'

export default function Cadastro() {

    const [nome, setNome] = useState('')
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repetirSenha, setRepetirSenha] = useState('')
    const [estado, setEstado] = useState(false);
    const [msg, setMsg] = useState('');

    function salvarUsuario() {

        if (senha !== repetirSenha) {
            setMsg('Confirmação de Senha Inválida!')
        } else {
            api
                .post("/usuarios", {
                    nome: nome,
                    login: login,
                    email: email,
                    senha: senha,
                    admin: false
                })
                .then((response) => {
                    console.log(response.data);
                    setEstado(true)
                })
                .catch((error) => {
                    setMsg('Erro ao cadastrar o usuário!')
                    console.log(error);
                })
        }
    }

    return (
        <div className="cadastro">

            {estado === true ? (<Navigate push to="/" />) : null}

            {msg !== '' ?
                (<div className="alert alert-danger w-25 mx-auto" role="alert">
                    {msg}
                </div>)
                :
                null
            }

            <div className='titulo'>
                <h1>Cadastro</h1>
            </div>

            <div className="container">
                <label htmlFor="nome">Nome</label>
                <input className="form-control" type="text" id="nome" name="nome" value={nome} onChange={(evt) => setNome(evt.target.value)} placeholder="Insira o seu nome" />
                <label htmlFor="login">Login</label>
                <input className="form-control" type="text" id="login" name="login" value={login} onChange={(evt) => setLogin(evt.target.value)} placeholder="Insira o seu login" />
                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" id="email" name="email" value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder="Insira o seu e-mail" />
                <label htmlFor="senha">Senha</label>
                <input className="form-control" type="password" id="senha" name="senha" value={senha} onChange={(evt) => setSenha(evt.target.value)} placeholder="******" />
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input className="form-control" type="password" id="confirmarSenha" value={repetirSenha} onChange={(evt) => setRepetirSenha(evt.target.value)} placeholder="******" />
                <button onClick={salvarUsuario} className="btn btn-primary mt-3">Cadastrar</button>
            </div>

        </div>
    )
}