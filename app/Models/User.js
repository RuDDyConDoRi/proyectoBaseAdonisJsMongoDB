'use strict'

const Model = use('Model')

class User extends Model {

	static get createTimestamp () { return 'createdAt' }
  	static get updateTimestamp () { return 'updatedAt' }
  	static get deleteTimestamp () { return 'deletedAt' }	

	static boot(){
		return ['password', 'verified', 'verificationToken']
	}

	static boot () {
    super.boot()
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  tokens () {
    return this.hasMany('App/Models/Token', '_id', 'userId')
  }

  images () {
    return this.morphMany('App/Models/Image', 'imageableType', 'imageableId')
  }
}

module.exports = User
