import Sequelize from 'sequelize';

export const up = queryInterface => (
  queryInterface.createTable('conversations_users', {
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
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    conversationId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'conversations',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  }).then(() => (
    queryInterface.addConstraint('conversations_users', ['userId', 'conversationId'], {
      type: 'unique',
    })
  ))
);

export const down = queryInterface => (
  queryInterface.dropTable('conversations')
);
