'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run () {
  	// const users = await Database.table('users')
  	let usersArray = await Factory.model('App/Models/User').create({
  		username: "namea",
    	email: "emaila",
    	password: "passworda"
  	})

  	usersArray = await Factory.model('App/Models/User').create({
  	    username: "nameb",
    	email: "emailb",
    	password: "passwordb"
  	})

    console.log(usersArray)
  }
}

module.exports = UserSeeder
