/**
 * @file GraphQL root mutations entry point
 */
import { GraphQLObjectType } from 'graphql';

import createConversation from './createConversation';
import createSession from './createSession';

export default new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createConversation,
    createSession,
  },
});
