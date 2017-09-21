/**
 * @file GraphQL entry point
 */
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';

import query from './queries';
import mutation from './mutations';

/**
 * Setup graphqlHTTP root
 *
 * @param {object} context - Context variables passed to all resolvers
 */
export default context =>
  graphqlHTTP(request => ({
    graphiql: process.env.NODE_ENV !== 'production',
    schema: new GraphQLSchema({
      query,
      mutation,
    }),
    context: {
      ...context,
      request,
    },
  }));
