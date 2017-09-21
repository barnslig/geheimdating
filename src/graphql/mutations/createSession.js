/**
 * @file Create a new bearer token by username and password
 */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { GraphQLNonNull, GraphQLString } from 'graphql';

import config from '../../config';
import sessionType from '../types/session';

export default {
  name: 'CreateSessionMutation',
  type: sessionType,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source, args, context) => (
    context.app.database.User
      .findOne({
        where: {
          username: args.username,
        },
      })
      .then(user => new Promise(resolve =>
        bcrypt.compare(args.password, user.password)
          .then(res => resolve({ res, user })),
      ))
      .then(({ res, user }) => new Promise((resolve, reject) => {
        if (!res) {
          reject('Authentication failed');
        }

        resolve({
          token: jwt.sign({
            userId: user.id,
          }, config.secret),
        });
      }))
  ),
};
