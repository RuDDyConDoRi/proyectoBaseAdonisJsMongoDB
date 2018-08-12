'use strict'

const Model = use('Model')

class Image extends Model {
	static get createTimestamp () { return 'createdAt' }
  static get updateTimestamp () { return 'updatedAt' }

  static get rules () {
   	return {
   		filename: 'required'
   	}
  }

  static boot () {
  	super.boot()
  	this.addHook('afterDelete', 'App/Models/Hooks/Image.removeFile')
  }
}

module.exports = Image
