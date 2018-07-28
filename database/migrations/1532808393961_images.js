'use strict'

const Schema = use('Schema')

class ImagesSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
      table.string('nombre', 255)
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImagesSchema
