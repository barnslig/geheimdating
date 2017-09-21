/**
 * @file User model definition. Should match the migrations
 */
import Sequelize from 'sequelize';

/**
 * Create a user model definition
 *
 * @param {sequelize.QueryInterface} queryInterface - Database query interface
 */
export default queryInterface => (
  queryInterface.define('user', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'users',
  })
);
