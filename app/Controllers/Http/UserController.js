'use strict'

const User = use('App/Models/User')

class UserController {
	async index(response){
		let users = await User.all()
    	console.log("Recupero: ", users)
    	
    	return response.json=users
	}

	async show({params, response}){
    	const user = await User.find(params.id)
    	console.log("Entro SHOW: ", params.id)
    	return response.json=user
  	}
  
  	async store({request, response}){
  	 	const userInfo = request.only(['username', 'email', 'password'])
  	  	const user = new User()
  	  	user.username = userInfo.username
  	  	user.email = userInfo.email
  	  	user.password = userInfo.password
  	  	await user.save()
  	  	console.log("Guardo Registro: ", user)
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
  	  	console.log("Actualizo Registro: ", user)
  	  	return response.status(200).json(user)
  	}
  
  	async delete({params, response}){
  	  	const user = await User.find(params.id)
  	  	if(!user){
  	  	  return response.status(404).json({data: 'Resource Not Found'})
  	  	}
  	  	await user.delete()
  	  	console.log("Elimino Registro: ", user.username)
  	  	return response.status(204).json(null) 
  	}

}

module.exports = UserController
