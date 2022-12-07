import './style.css'

export default function Alterar() {
    return (
        <div className="cadastro">

            <div className='titulo'>
                <h1>Alterar Dados</h1>
            </div>

            <form action='/login' method='post'>
                <div className="containerCadastro">
                    <label for="nome">Nome</label>
                    <input className="form-control" type="text" id="nome" placeholder="Insira o seu nome" />
                    <label for="login">Login</label>
                    <input className="form-control" type="text" id="login" placeholder="Insira o seu login" />
                    <label for="email">Email</label>
                    <input className="form-control" type="email" id="email" placeholder="Insira o seu e-mail" />
                    <label for="senha">Senha</label>
                    <input className="form-control" type="password" id="senha" placeholder="******" />
                    <label for="confirmarSenha">Confirmar Senha</label>
                    <input className="form-control" type="password" id="confirmarSenha" placeholder="******" />
                    <button className="btn btn-primary mt-3">Salvar</button>
                </div>
            </form>

        </div>
    )
}