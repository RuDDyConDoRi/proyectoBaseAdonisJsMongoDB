'use strict'

const Schema = use('Schema')

class CamasSchema extends Schema {
  up () {
    this.create('camas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('camas')
  }
}

module.exports = CamasSchema
