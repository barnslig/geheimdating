import Sequelize from 'sequelize';

export const up = queryInterface => (
  queryInterface.createTable('users', {
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
  }).then(() => (
    queryInterface.addIndex('users', ['username'])
  ))
);

export const down = queryInterface => (
  queryInterface.dropTable('users')
);
