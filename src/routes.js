/**
 * @file All HTTP routes
 */
import passport from 'passport';

import graphql from './graphql';

/**
 * Attach routes to an app
 *
 * @param {App} app - App to which the routes should attach
 */
export default (app) => {
  app.express.use('/graphql',
    passport.authenticate(['bearer', 'anonymous'], {
      session: false,
    }),
    graphql({
      app,
    }),
  );
};
