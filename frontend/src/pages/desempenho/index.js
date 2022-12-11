import React, { useEffect, useState } from "react";
import Usuario from "../../components/usuario";
import api from '../../services/api';

import './style.css'

export default function Desempenho() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        api
            .get("/usuarios")
            .then((response) => {
                setUsuarios(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="cadastro">

            <div className='titulo'>
                <h1>Desempenho Usuários</h1>
            </div>

            <div className="containerUsuarios">
                {usuarios.map((user, index) => <Usuario key={index} id={user.id} nome={user.nome} email={user.email} />)}
            </div>

        </div>
    )
}