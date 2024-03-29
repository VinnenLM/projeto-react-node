import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import api from '../../services/api'
import './style.css'

export default function Alterar() {

    const id = useSelector((state) => state.idUsuario);
    const admin = useSelector((state) => state.admin);

    const [nome, setNome] = useState('')
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repetirSenha, setRepetirSenha] = useState('')
    const [msg, setMsg] = useState('');

    useEffect(() => {
        api
            .get(`/usuarios/${id}`)
            .then((response) => {
                setNome(response.data.nome)
                setLogin(response.data.login)
                setEmail(response.data.email)
                setSenha(response.data.senha)
            })
            .catch((err) => {
                console.error("Erro ao atualizar " + err);
            });
    }, [id]);

    function atualizarDados() {

        if (senha !== repetirSenha) {
            setMsg('Confirmação de Senha Inválida!')
        } else {
            api
                .put(`/usuarios/${id}`, {
                    nome: nome,
                    login: login,
                    email: email,
                    senha: senha,
                    admin: admin
                })
                .then((response) => {
                    console.log(response.data);
                    window.location.reload(false);
                })
                .catch((error) => {
                    setMsg('Erro ao atualizar dados')
                    console.log(error);
                })
        }
    }

    return (
        <div className="alteracao">

            {msg !== '' ?
                (<div className="alert alert-danger w-25 mx-auto" role="alert">
                    {msg}
                </div>)
                :
                null
            }

            {id === null ? <Navigate to='/login' replace /> : null}

            <div className='titulo'>
                <h1>Alterar Dados</h1>
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
                <button onClick={atualizarDados} className="btn btn-primary mt-3">Cadastrar</button>
            </div>

        </div>
    )
}