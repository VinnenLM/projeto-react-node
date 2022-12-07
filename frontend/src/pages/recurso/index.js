import './style.css'

export default function Recurso() {
    return (
        <div className="login">

            <h1>Recurso Educacional</h1>

            <div className="nivel">
                <label for="dificuldade">Nível</label>
                <select name="dificuldade" id="dificuldade">
                    <option value="facil">Fácil</option>
                    <option value="dificil">Difícil</option>
                </select>
            </div>

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