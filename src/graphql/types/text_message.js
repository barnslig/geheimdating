/**
 * @file Represents a conversation message
 */
import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const textMessageType = new GraphQLObjectType({
  name: 'TextMessageType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: GraphQLString,
    },
    deliveredAt: {
      type: GraphQLString,
    },
    message: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default textMessageType;
