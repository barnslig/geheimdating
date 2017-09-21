/**
 * @file Database seeds entry. Add new seeds here
 */
import createUser from './create_user';

export default (db) => {
  createUser(db);
};
