module.exports = {

  port: 1337,
  environment: 'development',
  //environment: 'production',

  datastores: {
  default: {
      adapter: 'sails-mongo',
      host: 'localhost',
      port: 27017,
      user: '',
      password: '',
      database: 'Eleganza'
  }
},

  models:{
       connection: 'default',
       migrate: 'safe'
},

};