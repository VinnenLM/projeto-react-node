import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Usuario from "../../components/usuario";
import api from '../../services/api';

import './style.css'

export default function Desempenho() {

    const admin = useSelector((state) => state.admin);
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
    }, [admin])

    return (
        <div className="cadastro">

            {admin !== true ? <Navigate to='/recurso' replace /> : null}

            <div className='titulo'>
                <h1>Desempenho Usuários</h1>
            </div>

            <div className="containerUsuarios">
                {usuarios.map((user, index) => <Usuario key={index} id={user.id} nome={user.nome} email={user.email} />)}
            </div>

        </div>
    )
}