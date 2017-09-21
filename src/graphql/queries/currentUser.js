/**
 * @file Get the currently logged in user (or nothing)
 */
import userType from '../types/user';

export default {
  name: 'CurrentUserQuery',
  type: userType,
  resolve: (source, args, context) =>
    new Promise(resolve =>
      resolve(context.request.user)),
};
