/**
 * @file Represents a user account
 */
import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const userType = new GraphQLObjectType({
  name: 'UserType',
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
    username: {
      type: GraphQLString,
    },
  },
});

export default userType;
