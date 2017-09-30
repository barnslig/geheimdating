/**
 * @file Conversation-User join-table model definition
 */
import Sequelize from 'sequelize';

export default queryInterface => (
  queryInterface.define('conversationsUsers', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    conversationId: {
      type: Sequelize.INTEGER,
    },
  }, {
    tableName: 'conversations_users',
  })
);
