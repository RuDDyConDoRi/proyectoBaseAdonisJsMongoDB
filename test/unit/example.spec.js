'use strict'

const { test } = use('Test/Suite')('Example')

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})


const { test2 } = use('Test/Suite')('Example unit test')
const UserValidator = use('App/Models/User')

test('validate user details', async ({ assert }) => {
  
  const usuarioRecuperados = await UserValidator.all()
  assert.isTrue(usuarioRecuperados.rows.length > 0)
  /*assert.deepEqual(validation.messages(), [
    {
      field: 'email',
      message: 'Invalid user email address'
    }
  ])*/
})