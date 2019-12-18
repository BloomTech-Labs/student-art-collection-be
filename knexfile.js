// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/development/development.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/development/migrations/'
    },
    seeds: {
      directory: './data/development/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); 
      },
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testing/testing.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/development/migrations/'
    },
    seeds: {
      directory: './data/development/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); 
      },
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/production/migrations/'
    },
    seeds: {
      directory: './data/production/seeds'
    },
  }

};
