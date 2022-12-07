import './style.css'

export default function Login() {
    return (
        <div className="login">

            <h1>Login</h1>

            <form action='/login' method='post'>
                <div className="containerLogin">
                    <label for="email">Email</label>
                    <input className="form-control mb-2" type="email" id="email" placeholder="Insira o seu e-mail" />
                    <label for="senha">Senha</label>
                    <input className="form-control" type="password" id="senha" placeholder="******" />
                    <div className="botoes">
                        <button className="btn btn-primary mt-3">Entrar</button>
                        <button className="btn btn-secondary mt-3">Cadastrar-se</button>
                    </div>
                </div>
            </form>

        </div>
    )
}