'use strict'

const Schema = use('Schema')

class ServiciosSchema extends Schema {
  up () {
    this.create('servicios', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('servicios')
  }
}

module.exports = ServiciosSchema
