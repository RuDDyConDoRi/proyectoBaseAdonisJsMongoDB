'use strict'

const Schema = use('Schema')

class PaisesSchema extends Schema {
  up () {
    this.create('paises', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('paises')
  }
}

module.exports = PaisesSchema
