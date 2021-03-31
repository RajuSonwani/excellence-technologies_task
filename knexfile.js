require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, PORT } = process.env


//database pooling
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:    "localhost",
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASS  
    }
  },
  production: {
    client: 'mysql',
    connection: {
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASS 
    },
    connection: process.env.DATABASE_URL+"?ssl=true",

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  }

};