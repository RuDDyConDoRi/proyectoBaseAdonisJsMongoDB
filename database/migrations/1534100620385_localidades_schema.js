'use strict'

const Schema = use('Schema')

class LocalidadesSchema extends Schema {
  up () {
    this.create('localidades', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('localidades')
  }
}

module.exports = LocalidadesSchema
