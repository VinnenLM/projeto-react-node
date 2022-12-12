const database = require('../models')

class LoginController {

    static async login(req, res) {
        const { email, senha } = req.body
        try {
            const usuario = await database.Usuarios.findOne({
                where: {
                    email: email
                }
            });
            if (usuario !== null && usuario.senha == senha) {
                return res.status(200).json(usuario)
            } else {
                return res.status(500).json(error)
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}

module.exports = LoginController