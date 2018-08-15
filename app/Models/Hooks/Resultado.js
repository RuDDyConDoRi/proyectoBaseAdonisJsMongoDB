'use strict'

class Resultado {
	constructor(isOk, mensaje, respuesta) {
    	this.ok = isOk
		this.mensaje = mensaje
		this.respuesta = respuesta
  	}
}

module.exports = Resultado
