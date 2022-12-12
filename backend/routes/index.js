const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const atividades = require('./atividadesRoute')
const login = require('./loginRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    usuarios,
    atividades,
    login
  )
}
