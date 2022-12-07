const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    usuarios
  )
}
