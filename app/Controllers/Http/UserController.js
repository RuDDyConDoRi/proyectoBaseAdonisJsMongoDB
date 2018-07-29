'use strict'

const User = use('App/Models/User')
const Helpers = use('Helpers')
const Logger = use('Logger')

class UserController {

	async index(response){
		let users = await User.all()
		Logger.info('Se Recuperaron Regsitros Correctamente')
    	return response.json=users
	}

	async show({params, response}){
    	const user = await User.find(params.id)
    	Logger.info('Se Recupero El Registro: ', user.username)
    	return response.json=user
  	}
  
  	async store({request, response}){
  	 	const userInfo = request.only(['username', 'email', 'password'])
  	  	const user = new User()
  	  	user.username = userInfo.username
  	  	user.email = userInfo.email
  	  	user.password = userInfo.password
  	  	await user.save()
  	  	Logger.info('Se Guardo El Registro Correctamente: ', user.email)
  	  	return response.status(201).json(user)  
  	}
  
  	async update({params, request, response}){
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

  	async upload({request, response}){

  		const profilePic = request.file('profile_pic', {
 		   types: ['image'],
 		   size: '2mb'
 		})

  		//await profilePic.move(Helpers.tmpPath('./uploads'))
		/*await profilePic.move(Helpers.tmpPath('./uploads'), {
 		  name: 'custom-name.jpg'
 		})*/

 		await profilePic.move(Helpers.tmpPath('./uploads'), {
    		name: `${new Date().getTime()}_${profilePic.clientName}`
		})

		if (!profilePic.moved()) {
 		  return profilePic.error()
 		}

 		let respuesta = {}
 		respuesta.isOk = true
 		respuesta.mensaje = 'Archivo Cargado Correctamente'

 		Logger.info('Archivo Cargado Correctamente')
  	  	return response.status(201).json(respuesta)  
  	}
}

module.exports = UserController
