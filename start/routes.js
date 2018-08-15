'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

/**
 * @apiDefine CreateApiCNS
 * @apiVersion 0.1.0
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNameTooShort Minimum of 5 characters required.
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "UserNameTooShort"
 *     }
 */

 /**
 * @apiDefine admin Necesitan permisos para acceder.
 * Se necesita tener un usuario Admin para accede a este endpoint.
 *
 * Esta propiedad esta definida para una version especifica del endpoint.
 *
 * @apiVersion 0.1.0
 */

Route.get('/', ({ request }) => {
  return { mensaje: 'Saludando desde MongoDB con Adonisjs' }
})

Route.group(()=>{
/*
|--------------------------------------------------------------------------
| UsuarioPruebas
|--------------------------------------------------------------------------
*/
	/**
	* @api {post} /user Create a new User
	* @apiVersion 0.1.0
	* @apiName PostUser
	* @apiGroup User
	* @apiPermission none
	*
	* @apiDescription In this case "apiErrorStructure" is defined and used.
	* Define blocks with params that will be used in several functions, so you dont have to rewrite them.
	*
	* @apiParam {String} name Name of the User.
	*
	* @apiSuccess {Number} id         The new Users-ID.
	*
	* @apiUse CreateApiCNS
	*/
	Route.post('users', 'UserController.store')

	/**
	* @api {get} /users Recuperar Usuarios
	* @apiVersion 0.1.0
	* @apiName GetUsers
	* @apiGroup User
	* @apiPermission none
	*
	* @apiDescription Se obtendran todos los usarios.
	*
	* @apiUse CreateApiCNS
	*
	* @apiExample Ejemplo de uso:
	* curl -i http://127.0.0.1:3333/api/v0.1/users
	*
	* @apiSuccess {Boolean}    Ok            			Estado de la petición.
	* @apiSuccess {String} 	   Mensaje       			Mensaje que devuelve el endpoint.
	* @apiSuccess {Object[]}   respuesta     			Array de Usuarios.
 	* @apiSuccess {String}     respuesta.username 		Nombre del usuario.
 	* @apiSuccess {String}     respuesta.email  		Correo electronico de usuario.
 	* @apiSuccess {Date}       respuesta.created_at 	Fecha de creacion del usuario.
 	* @apiSuccess {Date}       respuesta.updated_at 	Fecha de actualización del usuario.
	*
	* @apiError NoAccessRight Only authenticated Admins can access the data.
	* @apiError UserNotFound   The <code>id</code> of the User was not found.
	*
	* @apiErrorExample Response (example):
	*     HTTP/1.1 401 Not Authenticated
	*     {
	*       "error": "NoAccessRight"
	*     }
	*/
	Route.get('users', 'UserController.index')

	/**
	* @api {get} /user/:id Read data of a User
	* @apiVersion 0.1.0
	* @apiName GetUser
	* @apiGroup User
	* @apiPermission admin
	*
	* @apiDescription Compare Verison 0.1.0 with 0.2.0 and you will see the 
	*                  green markers with new items in version 0.1.0 and red 
	*                  markers with removed items since 0.2.0.
	*
	* @apiParam {Number} id The Users-ID.
	*
	* @apiExample Example usage:
	* curl -i http://localhost/user/4711
	*
	* @apiSuccess {Number}   id            The Users-ID.
	* @apiSuccess {Date}     registered    Registration Date.
	* @apiSuccess {Date}     name          Fullname of the User.
	* @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
	* @apiSuccess {Object}   profile       Profile data (example for an Object)
	* @apiSuccess {Number}   profile.age   Users age.
	* @apiSuccess {String}   profile.image Avatar-Image.
	* @apiSuccess {Object[]} options       List of Users options (Array of Objects).
	* @apiSuccess {String}   options.name  Option Name.
	* @apiSuccess {String}   options.value Option Value.
	*
	* @apiError NoAccessRight Only authenticated Admins can access the data.
	* @apiError UserNotFound   The <code>id</code> of the User was not found.
	*
	* @apiErrorExample Response (example):
	*     HTTP/1.1 401 Not Authenticated
	*     {
	*       "error": "NoAccessRight"
	*     }
	*/
  	Route.get('users/:id', 'UserController.show')

  	/**
	* @api {put} /user/:id Change a User
	* @apiVersion 0.1.0
	* @apiName PutUser
	* @apiGroup User
	* @apiPermission none
	*
	* @apiDescription This function has same errors like POST /user, but errors 
	*				  not defined again, they were included with "apiErrorStructure"
	*
	* @apiParam {String} name Name of the User.
	*
	* @apiUse CreateApiCNS
	*/ 
  	Route.put('users/:id', 'UserController.update')
  	Route.delete('users/:id', 'UserController.delete')
  	Route.post('users/upload', 'UserController.upload')

  	Route.post('users/login', 'UserController.login')
  	Route.post('users/register', 'UserController.register')
  	Route.put('users/profile/:id', 'UserController.profile').middleware(['auth:jwt'])

/*
|--------------------------------------------------------------------------
| Sedes
|--------------------------------------------------------------------------
*/
  	Route.get('sedes', 'SedeController.index')
  	Route.post('sedes', 'SedeController.store')
  	Route.get('sedes/:id', 'SedeController.show')
  	Route.put('sedes/:id', 'SedeController.update')
  	Route.delete('sedes/:id', 'SedeController.delete')

/*
|--------------------------------------------------------------------------
| Redes
|--------------------------------------------------------------------------
*/
  	Route.get('redes', 'RedeController.index')
  	Route.post('redes', 'RedeController.store')
  	Route.get('redes/:id', 'RedeController.show')
  	Route.put('redes/:id', 'RedeController.update')
  	Route.delete('redes/:id', 'RedeController.delete')

/*
|--------------------------------------------------------------------------
| Establecimientos
|--------------------------------------------------------------------------
*/
  	Route.get('establecimientos', 'EstablecimientoController.index')
  	Route.post('establecimientos', 'EstablecimientoController.store')
  	Route.get('establecimientos/:id', 'EstablecimientoController.show')
  	Route.put('establecimientos/:id', 'EstablecimientoController.update')
  	Route.delete('establecimientos/:id', 'EstablecimientoController.delete')

/*
|--------------------------------------------------------------------------
| Pisos
|--------------------------------------------------------------------------
*/
  	Route.get('pisos', 'PisoController.index')
  	Route.post('pisos', 'PisoController.store')
  	Route.get('pisos/:id', 'PisoController.show')
  	Route.put('pisos/:id', 'PisoController.update')
  	Route.delete('pisos/:id', 'PisoController.delete')

/*
|--------------------------------------------------------------------------
| Servicios
|--------------------------------------------------------------------------
*/
  	Route.get('servicios', 'ServicioController.index')
  	Route.post('servicios', 'ServicioController.store')
  	Route.get('servicios/:id', 'ServicioController.show')
  	Route.put('servicios/:id', 'ServicioController.update')
  	Route.delete('servicios/:id', 'ServicioController.delete')

/*
|--------------------------------------------------------------------------
| Camas
|--------------------------------------------------------------------------
*/
  	Route.get('camas', 'CamaController.index')
  	Route.post('camas', 'CamaController.store')
  	Route.get('camas/:id', 'CamaController.show')
  	Route.put('camas/:id', 'CamaController.update')
  	Route.delete('camas/:id', 'CamaController.delete')

}).prefix('api/cns')
