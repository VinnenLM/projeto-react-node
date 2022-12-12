import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'

function Menu() {

    const idUsuario = useSelector((state) => state.idUsuario);
    const admin = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    return (

        <header className="">
            {
                (idUsuario !== null) ?
                    <div className='menu'>
                        <Link to="/recurso" className="">Recurso</Link>
                        <Link to={`/historico/${idUsuario}`} className="">Historico</Link>
                        {(admin === true) ? <Link to="/desempenho" className="">Desempenho</Link> : null}
                        <Link to="/alterar" className="">Alterar Dados</Link>
                        <Link to="/login" onClick={() => { dispatch({ type: 'LOGOUT' }) }} className="">Sair</Link>
                    </div>
                    :
                    null
            }
        </header >
    );
}

export default Menu;