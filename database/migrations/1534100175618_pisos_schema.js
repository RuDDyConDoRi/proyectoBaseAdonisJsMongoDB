'use strict'

const Schema = use('Schema')

class PisosSchema extends Schema {
  up () {
    this.create('pisos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('pisos')
  }
}

module.exports = PisosSchema
