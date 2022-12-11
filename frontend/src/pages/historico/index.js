import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Atividade from "../../components/atividade";
import api from '../../services/api';

import './style.css'

export default function Historico() {

    const { idUsuario } = useParams();
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        api
            .get(`/atividades/${idUsuario}`)
            .then((response) => {
                console.log(response);
                setAtividades(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="cadastro">

            <div className='titulo'>
                <h1>Histórico</h1>
            </div>

            <div className="containerUsuarios">
                {atividades.map((ativ, index) =>
                    <Atividade
                        key={index}
                        id={ativ.id}
                        questao={ativ.questao}
                        nivel={ativ.nivel}
                        resposta={ativ.resposta}
                        acerto={ativ.acerto}
                    />)}
            </div>

        </div>
    )
}