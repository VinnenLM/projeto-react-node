import './style.css'

export default function Atividade({ id, questao, nivel, resposta, acerto }) {
    return (
        <div to={`/${id}`} className="ativCard">
            <ul className="list-group">
                <li className="list-group-item">
                    <p>Questão: {questao}</p>
                    <p>Nível: {nivel}</p>
                    <p>Resposta: {resposta}</p>
                    <p>Acertou: {(acerto) ? 'Sim' : 'Não'}</p>
                </li>
            </ul>
        </div>
    )
}