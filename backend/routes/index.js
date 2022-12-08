const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const atividades = require('./atividadesRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    usuarios,
    atividades
  )
}
