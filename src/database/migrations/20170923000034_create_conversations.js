import Sequelize from 'sequelize';

export const up = queryInterface => (
  queryInterface.createTable('conversations', {
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
    isTemp: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  })
);

export const down = queryInterface => (
  queryInterface.dropTable('conversations')
);
