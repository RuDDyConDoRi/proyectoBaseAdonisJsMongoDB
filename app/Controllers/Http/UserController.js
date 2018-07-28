'use strict'

const User = use('App/Models/User')

class UserController {
	async index(){
		return await User.fetch()
	}

	show({params}){
		return {id: params.id, username: 'user1'}
	}
}

module.exports = UserController
