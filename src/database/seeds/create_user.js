/**
 * @file Initial user account database seed
 */
import bcrypt from 'bcrypt';

/**
 * Create initial user account
 *
 * @param {Database} db - Database instance
 */
export default db => (
  db.User.findOrCreate({
    where: {
      username: 'testuser',
    },
    defaults: {
      username: 'testuser',
      password: bcrypt.hashSync('testpassword', 10),
    },
  })
);
