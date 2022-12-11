import './style.css'

export default function Documentacao() {

    return (
        <div className="cadastro">

            <div className='titulo'>
                <h1>Documentação</h1>
            </div>

            <div className="containerUsuarios">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>GET</td>
                            <td>/usuarios/:id</td>
                            <td>Busca um usuário específico</td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>/usuarios</td>
                            <td>Cadastra um novo usuário</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>/usuarios/:id</td>
                            <td>Atualiza os dados do usuário</td>
                        </tr>
                        <tr>
                            <td>GET</td>
                            <td>/atividades/:id</td>
                            <td>Busca todas as atividades feitas por um usuário específico, além da contagem de acertos e erros</td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>/atividades</td>
                            <td>Cadastra uma nova atividade de um usuário</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}