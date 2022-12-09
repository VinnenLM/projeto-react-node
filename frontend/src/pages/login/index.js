import { Link } from 'react-router-dom';
import './style.css'

export default function Login() {
    return (
        <div className="login">

            <h1>Login</h1>

            <div className="container">
                <label htmlFor="email">Email</label>
                <input className="form-control mb-2" type="email" id="email" placeholder="Insira o seu e-mail" />
                <label htmlFor="senha">Senha</label>
                <input className="form-control" type="password" id="senha" placeholder="******" />
                <div className="botoes">
                    <button className="btn btn-primary mt-3">Entrar</button>
                    <Link to="/cadastro" className="btn btn-secondary mt-3">Cadastrar-se</Link>
                </div>
            </div>

        </div>
    )
}