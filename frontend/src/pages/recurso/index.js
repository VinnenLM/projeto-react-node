import React, { useState } from "react";
import api from "../../services/api";
import './style.css'

export default function Recurso() {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [operacao, setOperacao] = useState('+');
    const [dificuldade, setDificuldade] = useState('fácil');
    const [resposta, setResposta] = useState(null);
    const [msg, setMsg] = useState('');

    function mudarValores() {
        if (dificuldade === 'fácil') {
            let valor1 = Math.floor(Math.random() * (10 - 1) + 1);
            let valor2 = Math.floor(Math.random() * (10 - 1) + 1);
            setValor1(valor1)
            setValor2(valor2)
        } else {
            let valor1 = Math.floor(Math.random() * (50 - 1) + 1);
            let valor2 = Math.floor(Math.random() * (50 - 1) + 1);
            setValor1(valor1)
            setValor2(valor2)
        }
    }

    function mudarOperacao() {
        let operadoresFacil = ['+', '-'];
        let operadoresDificil = ['/', '*'];

        if (dificuldade === 'fácil') {
            let operacaoAleatoria = operadoresFacil[Math.floor(Math.random() * operadoresFacil.length)];
            setOperacao(operacaoAleatoria)
        } else {
            let operacaoAleatoria = operadoresDificil[Math.floor(Math.random() * operadoresDificil.length)];
            setOperacao(operacaoAleatoria)
        }
    }

    function gerarQuestao() {
        mudarOperacao();
        mudarValores();
    }

    function salvarAtividade() {

        let questao = valor1 + operacao + valor2;
        let respostaCerta = eval(questao);
        let acerto = false;

        if (respostaCerta == resposta) {
            acerto = true;
            setMsg('Resposta Correta!')
        } else if (resposta != null) {
            acerto = false;
            setMsg('Resposta Errada!')
        }

        api
            .post("/atividades", {
                questao: questao,
                nivel: dificuldade,
                resposta: resposta,
                acerto: acerto
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                setMsg('Resposta Inválida!')
                console.log(error);
            })
    }

    return (
        <div className="login">

            <h1>Recurso Educacional</h1>

            <div className="containerNivel">

                {msg !== '' ?
                    (<div className="alert alert-warning w-25 mx-auto" role="alert">
                        {msg}
                    </div>)
                    :
                    null
                }

                <div className="radioNivel">
                    <input
                        type="radio"
                        value="fácil"
                        checked={dificuldade === "fácil"}
                        onChange={() => setDificuldade('fácil')} />
                    <label htmlFor="dificuldade"><strong>Fácil</strong></label>

                    <input
                        type="radio"
                        value="difícil"
                        checked={dificuldade === "difícil"}
                        onChange={() => setDificuldade('difícil')} />
                    <label htmlFor="dificuldade"><strong>Difícil</strong></label>

                </div>

            </div>

            <div className="container">

                <div className="containerPergunta">
                    <span id="valor1">{valor1}</span>
                    <span id="operacao">{operacao}</span>
                    <span id="valor2">{valor2}</span>
                </div>

                <button className="btn btn-secondary mt-3" onClick={gerarQuestao}>Gerar Questão</button>

            </div>

            <div className="container mt-5">
                <div className="resposta">
                    <input className="form-control mb-2" type="email" id="resposta" name="resposta" value={resposta} onChange={(evt) => setResposta(evt.target.value)} placeholder="Insira a sua resposta" />
                    <button className="btn btn-primary mt-3" onClick={salvarAtividade}>Responder</button>
                </div>
            </div>

        </div>
    )
}