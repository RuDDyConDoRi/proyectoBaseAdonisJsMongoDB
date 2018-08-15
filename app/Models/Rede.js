'use strict'

const Model = use('Model')

class Rede extends Model {
	static get createTimestamp () { return 'createdAt' }
    static get updateTimestamp () { return 'updatedAt' }
	static get deleteTimestamp () { return 'deletedAt' }
	static get createBy () { return 'createdBy' }
	static get updateBy () { return 'updatedBy' }
	static get deleteBy () { return 'deletedBy' }

	static get rules () {
   		return {
   			nombre: 'required'
   		}
  	}

	static boot () {
    	super.boot()
 	}
}

module.exports = Rede
