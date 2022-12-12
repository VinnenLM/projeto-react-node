import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import api from '../../services/api';
import './style.css'

export default function Login() {

    const id = useSelector((state) => state.idUsuario);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estado, setEstado] = useState(false);
    const [msg, setMsg] = useState(false);

    const dispatch = useDispatch();

    function logar() {
        api
            .post("/login", {
                email: email,
                senha: senha
            })
            .then((response) => {
                dispatch({ type: 'LOGIN', idUsuario: response.data.id, admin: response.data.admin });
                setEstado(true);
            })
            .catch((error) => {
                setMsg(true)
                console.log(error);
            })
    }

    return (
        <div className="login">

            {(estado) ? (<Navigate push to="/recurso" />) : null}
            {(id != null) ? (<Navigate push to="/recurso" />) : null}

            <h1>Login</h1>

            {msg === true ?
                (<div className="alert alert-danger w-25 mx-auto" role="alert">
                    Email ou Senha inválidos!
                </div>)
                :
                null
            }

            <div className="container">
                <label htmlFor="email">Email</label>
                <input className="form-control mb-2" type="email" id="email" placeholder="Insira o seu e-mail" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                <label htmlFor="senha">Senha</label>
                <input className="form-control" type="password" id="senha" placeholder="******" value={senha} onChange={(evt) => setSenha(evt.target.value)} />
                <div className="botoes">
                    <button className="btn btn-primary mt-3" onClick={logar}>Entrar</button>
                    <Link to="/cadastro" className="btn btn-secondary mt-3">Cadastrar-se</Link>
                </div>
            </div>

        </div>
    )
}