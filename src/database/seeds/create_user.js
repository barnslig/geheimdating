/**
 * @file Initial user account database seed
 */
import bcrypt from 'bcrypt';

/**
 * Create initial user account
 *
 * @param {Database} db - Database instance
 */
export default (db) => {
  db.User.findOrCreate({
    where: {
      username: 'john',
    },
    defaults: {
      username: 'john',
      password: bcrypt.hashSync('testpassword', 10),
    },
  });

  db.User.findOrCreate({
    where: {
      username: 'jane',
    },
    defaults: {
      username: 'jane',
      password: bcrypt.hashSync('passwordtest', 10),
    },
  });
};
