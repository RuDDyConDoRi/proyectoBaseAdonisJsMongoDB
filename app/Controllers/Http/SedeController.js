'use strict'

const Sede = use('App/Models/Sede')
const Resultado = use('App/Models/Hooks/Resultado')
const Helpers = use('Helpers')
const Logger = use('Logger')

class SedeController {

  async index ({ response }) {
    let resultado = {}
    try {
      let sedes = await Sede.all()

      resultado = new Resultado(true, 'Se Recuperaron Registros Correctamente', 
                                sedes)
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
      const sedesInfo = request.only(['idSedes', 'nombre', 'detalle', 
                                      'usuarioAlta', 'usuarioActualizacion'])
      const sedes = new Sede()
      sedes.idSedes = sedesInfo.idSedes
      sedes.nombre = sedesInfo.nombre
      sedes.detalle = sedesInfo.detalle
      sedes.created_by = sedesInfo.usuarioAlta
      sedes.updated_by = sedesInfo.usuarioAlta
      await sedes.save()

      resultado = new Resultado(true, 'Se Guardo El Registro Correctamente',
                                sedes)
      resultado = response.status(201).json(resultado)
      Logger.info('Se Guardo El Registro Correctamente: ', sedes._id)
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
      const sedes = await Sede.find(params.id)
      resultado = new Resultado(true, 'Se Recupero El Registro',
                                sedes)
      resultado = response.status(200).json(resultado)
      Logger.info('Se Recupero El Registro: ', sedes._id)
    } catch(e) {
      resultado = new Resultado(false, e.message, null)
      resultado = response.status(500).json(resultado)
      Logger.error(e.message);
    }
    
    return response.json(resultado)
  }

  async update ({params, request, response}){
    const userInfo = request.only(['username', 'email', 'password'])
    const user = await User.find(params.id)
    if(!user){
      return response.status(404).json({data: 'Resource Not Found'})
    }
    user.username = userInfo.username
    user.email = userInfo.email
    user.password = userInfo.password
    await user.save()
    Logger.info('Se Actualizo El Registro Correctamente: ', user.email)
    
    return response.status(200).json(user)
  }

  async delete({params, response}){
    const user = await User.find(params.id)
    if(!user){
      return response.status(404).json({data: 'Resource Not Found'})
    }
    await user.delete()
    Logger.info('Se Elimino El Registro Correctamente: ', user.username)
    
    return response.status(204).json(null) 
  }
}

module.exports = SedeController
