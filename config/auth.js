'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Authenticator
  |--------------------------------------------------------------------------
  |
  | Authentication is a combination of serializer and scheme with extra
  | config to define on how to authenticate a user.
  |
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  |
  */
  authenticator: 'jwt',

  /*
  |--------------------------------------------------------------------------
  | Session
  |--------------------------------------------------------------------------
  |
  | Session authenticator makes use of sessions to authenticate a user.
  | Session authentication is always persistent.
  |
  */
  session: {
    serializer: 'LucidMongo',
    model: 'App/Models/User',
    scheme: 'session',
    uid: 'email',
    password: 'password'
  },

  /*
  |--------------------------------------------------------------------------
  | Basic Auth
  |--------------------------------------------------------------------------
  |
  | The basic auth authenticator uses basic auth header to authenticate a
  | user.
  |
  | NOTE:
  | This scheme is not persistent and users are supposed to pass
  | login credentials on each request.
  |
  */
  basic: {
    serializer: 'LucidMongo',
    model: 'App/Models/User',
    scheme: 'basic',
    uid: 'email',
    password: 'password'
  },

  /*
  |--------------------------------------------------------------------------
  | Jwt
  |--------------------------------------------------------------------------
  |
  | The jwt authenticator works by passing a jwt token on each HTTP request
  | via HTTP `Authorization` header.
  |
  */
  jwt: {
    serializer: 'LucidMongo',
    model: 'App/Models/User',
    token: 'App/Models/Token',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    expiry: '1h',
    options: {
      secret: Env.get('APP_KEY')
    }
  },

   api: {
    serializer: 'LucidMongo',
    model: 'App/Models/User',
    token: 'App/Models/Token',
    scheme: 'api',
    uid: 'email',
    password: 'password',
    expiry: '10d',
  }
}
