'use strict'

const Schema = use('Schema')

class RedesSchema extends Schema {
  up () {
    this.create('redes', (table) => {
      table.increments()
      table.integer('idSedes')
      table.integer('idRedes')
      table.string('nombre', 25)
      table.string('detalle', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('redes')
  }
}

module.exports = RedesSchema
