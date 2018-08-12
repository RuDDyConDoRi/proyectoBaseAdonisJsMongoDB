'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker, i, data) => {
	
	console.log("FAKER: ", faker.username());
    
    return {
    	username: data.username,
    	email: data.email,
    	password: data.password, 
    	faker: faker.username()
  	}
})
