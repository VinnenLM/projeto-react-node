const { Router } = require('express')
const AtividadeController = require('../controllers/AtividadeController')

const router = Router()
router
    .get('/atividades', AtividadeController.listarTodasAtividades)
    .get('/atividades/:id', AtividadeController.listarAtividadesPorUsuario)
    .post('/atividades', AtividadeController.salvarAtividade)

module.exports = router