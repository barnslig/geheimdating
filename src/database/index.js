/**
 * @file Database setup entry point
 */
import Sequelize from 'sequelize';
import Umzug from 'umzug';
import path from 'path';

import seed from './seeds';

/**
 * Class representing a database
 */
class Database {
  /**
   * Create a new migrating database interface
   *
   * @param {object|string} config - See http://docs.sequelizejs.com/manual/installation/getting-started.html#setting-up-a-connection
   * @returns {Database} New instance
   */
  constructor(config) {
    this.sequelize = new Sequelize(config);

    // try to connect to the database
    this.sequelize.authenticate()
      .catch(err => console.log(`Unable to connect to the database: ${err}`));

    // set up migration interface
    this.umzug = new Umzug({
      logging: console.log,
      storage: 'sequelize',
      storageOptions: {
        sequelize: this.sequelize,
      },
      migrations: {
        params: [this.sequelize.getQueryInterface()],
        path: path.join(__dirname, 'migrations'),
        pattern: /\.js$/,
      },
    });

    // load models
    this.User = this.sequelize.import(path.join(__dirname, 'models/user'));
  }

  /**
   * Run upwards migrations
   *
   * @returns {Promise}
   */
  migrateUp() {
    return this.umzug.up();
  }

  /**
   * Run downwards migrations
   *
   * @returns {Promise}
   */
  migrateDown() {
    return this.umzug.down();
  }

  /**
   * Seed database
   */
  seed() {
    seed(this);
  }
}

export default Database;
