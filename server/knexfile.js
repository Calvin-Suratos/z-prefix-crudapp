// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      password: 'docker',
      user: 'postgres',
      port: 5432,
      database: 'blogger_db'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      password: 'coker',
      user: 'postgres',
      port: 5432,
      database: 'blogger_db'
    }
  },
  staging: {
    client: 'postgresql',
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
    client: 'postgresql',
    connection: 'postgres://pqbicytoxqrjzk:dfb858bbeca0bf08b44108bf8b878374ab18370e380e5ce4b23f8c6e90cc743d@ec2-44-206-89-185.compute-1.amazonaws.com:5432/d9g8dhs90lde3o?ssl=no-verify',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
