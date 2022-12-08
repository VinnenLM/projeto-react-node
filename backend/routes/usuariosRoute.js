const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()

router
    .get('/usuarios', UsuarioController.listarTodosUsuarios)
    .get('/usuarios/:id', UsuarioController.buscarUsuario)
    .post('/usuarios', UsuarioController.cadastrarUsuario)
    .put('/usuarios/:id', UsuarioController.alterarUsuario)

module.exports = router