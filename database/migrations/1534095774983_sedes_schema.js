'use strict'

const Schema = use('Schema')

class SedesSchema extends Schema {
  up () {
    this.create('sedes', (table) => {
      table.increments()
      table.integer('idSedes')
      //table.boolean('is_revoked').defaultTo(false)
      table.string('nombre', 25)
      table.string('detalle', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('sedes')
  }
}

module.exports = SedesSchema
