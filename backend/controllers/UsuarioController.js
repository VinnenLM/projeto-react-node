const database = require('../models')

class UsuarioController {

  static async listarTodosUsuarios(req, res) {
    try {
      const todosUsuarios = await database.Usuarios.findAll()
      return res.status(200).json(todosUsuarios)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.todosUsuarios)
    }
  }

  static async cadastrarUsuario(req, res) {
    const novoUsuario = req.body
    try {
      const usuarioCriado = await database.Usuarios.create(novoUsuario)
      return res.status(200).json(usuarioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = UsuarioController