import { Link } from "react-router-dom";
import './style.css'

export default function Usuario({ id, nome, email }) {
    return (
        <div to={`/${id}`} className="userCard">
            <ul className="list-group">
                <li className="list-group-item">
                    <p>Usuário: {nome}</p>
                    <p>Email: {email}</p>
                    <Link to={`/historico/${id}`}><button className="btn btn-primary" title="Visualizar">Visualizar</button></Link>
                </li>
            </ul>
        </div>
    )
}