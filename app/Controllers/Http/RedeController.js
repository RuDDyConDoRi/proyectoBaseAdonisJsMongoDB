'use strict'

const Rede = use('App/Models/Rede')
const Resultado = use('App/Models/Hooks/Resultado')
const Logger = use('Logger')
const Database = use('Database')

class RedeController {

  async index ({ response }) {
    let resultado = {}
    try {
      let redes = await Rede.all()

      resultado = new Resultado(true, 'Se Recuperaron Registros Correctamente', 
                                redes)
      resultado = response.status(200).json(resultado)
      Logger.info('Se Recuperaron Registros Correctamente')
    } catch(e) {
      resultado = new Resultado(false, e.message, null)
      resultado = response.status(500).json(resultado)
      Logger.error(e.message)
    }

    return resultado
  }

  async store ({request, response}) {
    let resultado = {}
    try {
      const redesInfo = request.only(['idSedes', 'idRedes','nombre', 'detalle', 
                                      'usuarioAlta', 'usuarioActualizacion'])
      const redes = new Rede()
      redes.idSedes = redesInfo.idSedes
      redes.idRedes = redesInfo.idRedes
      redes.nombre = redesInfo.nombre
      redes.detalle = redesInfo.detalle
      redes.created_by = redesInfo.usuarioAlta
      redes.updated_by = redesInfo.usuarioAlta
      redes.deleted_at = null
      await redes.save()

      resultado = new Resultado(true, 'Se Guardo El Registro Correctamente',
                                redes)
      resultado = response.status(201).json(resultado)
      Logger.info('Se Guardo El Registro Correctamente: ', redes._id)
    } catch(e) {
      resultado = new Resultado(false, e.message, null)
      resultado = response.status(500).json(resultado)
      Logger.error(e.message);
    }

    return resultado
  }

  async show ({ params, response }){
    let resultado = {}
    try {
      const redes = await Rede.find(params.id)
      resultado = new Resultado(true, 'Se Recupero El Registro',
                                redes)

      const users = await Database.collection('sedes').paginate(0,5,1)

      console.log('test--> ', users);

      resultado = response.status(200).json(resultado)
      Logger.info('Se Recupero El Registro: ', redes._id)
    } catch(e) {
      resultado = new Resultado(false, e.message, null)
      resultado = response.status(500).json(resultado)
      Logger.error(e.message);
    }
    
    return resultado
  }

  async edit () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = RedeController
