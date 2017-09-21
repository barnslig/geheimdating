/**
 * @file Application entry point
 */
import AnonymousStrategy from 'passport-anonymous';
import BearerStrategy from 'passport-http-bearer';
import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

import config from './config';
import Database from './database';
import routes from './routes';

/**
 * Class representing the web application
 */
class App {
  /**
   * Create a new web application
   *
   * @param {object} _config - Application config
   */
  constructor(_config = config) {
    this.config = _config;

    /* Setup database
     */
    this.database = new Database(config.database);
    this.database.migrateUp();
    this.database.seed();

    /* Setup express. Add middlewares/… here
     */
    this.express = express();

    /* Setup passport authentication. Add strategies/… here
     */
    passport.use(new AnonymousStrategy());
    passport.use(new BearerStrategy((token, done) => {
      try {
        const decodedToken = jwt.verify(token, this.config.secret);
        this.database.User
          .findById(decodedToken.userId)
          .then(done.bind(this, null));
      } catch (e) {
        done(e);
      }
    }));

    /* Attach HTTP routes
     */
    routes(this);
  }

  /**
   * Start listening via HTTP
   */
  listen() {
    this.express.listen(this.config.listen.port, this.config.listen.hostname, () =>
      console.log(`Now listening on ${this.config.listen.hostname}:${this.config.listen.port}`),
    );
  }
}

/* TODO move this
 */
const a = new App();
a.listen();
