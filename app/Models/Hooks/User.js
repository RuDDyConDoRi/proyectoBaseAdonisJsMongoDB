'use strict'

const Hash = use('Hash')

const UserHook = module.exports = {}

/*UserHook.method = async (modelInstance) => {
}*/
UserHook.hashPassword = async (userInstance) => {
  if (userInstance.password) {
    userInstance.password = await Hash.make(userInstance.password)
  }
}