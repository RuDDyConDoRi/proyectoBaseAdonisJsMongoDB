'use strict'

const Schema = use('Schema')

class DepartamentosSchema extends Schema {
  up () {
    this.create('departamentos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('departamentos')
  }
}

module.exports = DepartamentosSchema
