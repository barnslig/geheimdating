/**
 * @file Represents a session token
 */
import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const sessionType = new GraphQLObjectType({
  name: 'SessionType',
  fields: {
    token: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default sessionType;
