'use strict'

const Schema = use('Schema')

class ProvinciasSchema extends Schema {
  up () {
    this.create('provincias', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('provincias')
  }
}

module.exports = ProvinciasSchema
