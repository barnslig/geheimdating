/**
 * @file Create a new conversation with a random stranger
 */
import Sequelize from 'sequelize';

import conversationType from '../types/conversation';

export default {
  name: 'CreateConversationMutation',
  type: conversationType,
  resolve: (source, args, context) => new Promise((resolve, reject) => {
    if (!context.request.user) {
      reject('Permission denied');
    }

    // Find a stranger
    // TODO implement logic to find a *different* good stranger which has free slots
    context.app.database.User
      .findOne({
        where: {
          id: {
            $not: context.request.user.id,
          },
        },
        order: [
          Sequelize.fn('RANDOM'),
        ],
      })
      .then(stranger => (
        // Create a new transaction
        context.app.database.Conversation.create()
          .then((conversation) => {
            // Add stranger and current user to the conversation
            conversation.addUser(stranger);
            conversation.addUser(context.request.user);

            resolve({
              ...conversation,
              users: [
                stranger,
                context.request.user,
              ],
            });
          })
      ))
      .catch(reject);
  }),
};
