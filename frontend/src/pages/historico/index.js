import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Atividade from "../../components/atividade";
import api from '../../services/api';

import './style.css'

export default function Historico() {

    const { idUsuario } = useParams();
    const [atividades, setAtividades] = useState([]);
    const [countAtividades, setCountAtividades] = useState(0);
    const [countErrosFacil, setCountErrosFacil] = useState(0);
    const [countAcertosFacil, setCountAcertosFacil] = useState(0);
    const [countErrosDificil, setCountErrosDificil] = useState(0);
    const [countAcertosDificil, setCountAcertosDificil] = useState(0);

    useEffect(() => {
        api
            .get(`/atividades/${idUsuario}`)
            .then((response) => {
                setAtividades(response.data.atividades)
                setCountAtividades(response.data.countAtividades)
                setCountErrosFacil(response.data.countErrosFacil)
                setCountAcertosFacil(response.data.countAcertosFacil)
                setCountErrosDificil(response.data.countErrosDificil)
                setCountAcertosDificil(response.data.countAcertosDificil)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [idUsuario])

    return (
        <div className="cadastro">

            <div className='titulo'>
                <h1>Histórico</h1>
            </div>

            <div className="containerUsuarios">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" colspan="2" class="text-center">Resumo Atividades</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Atividades Realizadas</td>
                            <td class="text-center">{countAtividades}</td>
                        </tr>
                        <tr>
                            <td>Acertos (fácil)</td>
                            <td class="text-center">{countAcertosFacil}</td>
                        </tr>
                        <tr>
                            <td>Erros (Fácil)</td>
                            <td class="text-center">{countErrosFacil}</td>
                        </tr>
                        <tr>
                            <td>Acertos (Difícil)</td>
                            <td class="text-center">{countAcertosDificil}</td>
                        </tr>
                        <tr>
                            <td>Erros (Difícil)</td>
                            <td class="text-center">{countErrosDificil}</td>
                        </tr>
                    </tbody>
                </table>
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