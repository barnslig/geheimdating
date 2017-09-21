/**
 * @file GraphQL root mutations entry point
 */
import { GraphQLObjectType } from 'graphql';

import createSession from './createSession';

export default new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createSession,
  },
});
