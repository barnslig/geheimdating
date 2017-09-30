/**
 * @file Conversation model definition. Should match the migrations
 */
import Sequelize from 'sequelize';

export default queryInterface => (
  queryInterface.define('conversation', {
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
  }, {
    tableName: 'conversations',
  })
);
