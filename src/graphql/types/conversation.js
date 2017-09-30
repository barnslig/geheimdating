/**
 * @file Represents a conversation
 */
import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import message from './message';
import user from './user';

const conversationType = new GraphQLObjectType({
  name: 'ConversationType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(user)),
    },
    isArchived: {
      type: GraphQLBoolean,
    },
    isTemp: {
      type: GraphQLBoolean,
    },
    message: {
      type: message,
    },
  },
});

export default conversationType;
