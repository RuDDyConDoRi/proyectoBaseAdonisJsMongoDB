'use strict'

const Schema = use('Schema')

class EstablecimientosSchema extends Schema {
  up () {
    this.create('establecimientos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('escimientos')
  }
}

module.exports = EstablecimientosSchema
