const database = require('../models')

class AtividadeController {

  static async listarTodasAtividades(req, res) {
    try {
      const todasAtividades = await database.Atividades.findAll()
      return res.status(200).json(todasAtividades)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.todasAtividades)
    }
  }

  static async listarAtividadesPorUsuario(req, res) {
    const { id } = req.params
    try {
      const atividades = await database.Atividades.findAll({
        where: {
          userId: Number(id)
        }
        //include: [{
        //  model: database.Usuarios
        //}]
      });
      const countAtividades = await database.Atividades.count({
        where: {
          userId: Number(id),
        }
      })
      const countErrosFacil = await database.Atividades.count({
        where: {
          userId: Number(id),
          acerto: false,
          nivel: 'fácil'
        }
      })
      const countAcertosFacil = await database.Atividades.count({
        where: {
          userId: Number(id),
          acerto: true,
          nivel: 'fácil'
        }
      })
      const countErrosDificil = await database.Atividades.count({
        where: {
          userId: Number(id),
          acerto: false,
          nivel: 'difícil'
        }
      })
      const countAcertosDificil = await database.Atividades.count({
        where: {
          userId: Number(id),
          acerto: true,
          nivel: 'difícil'
        }
      })
      return res.status(200).json(
        {
          atividades,
          countAtividades,
          countErrosFacil,
          countAcertosFacil,
          countErrosDificil,
          countAcertosDificil
        })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async salvarAtividade(req, res) {
    const novaAtividade = req.body
    try {
      const atividadeCriada = await database.Atividades.create(novaAtividade)
      return res.status(200).json(atividadeCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = AtividadeController