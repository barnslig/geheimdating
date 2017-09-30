/**
 * @file GraphQL root queries entry point
 */
import { GraphQLObjectType } from 'graphql';

import currentUser from './currentUser';
import conversations from './conversations';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    currentUser,
    conversations,
  },
});
