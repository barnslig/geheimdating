/**
 * @file Conversations listing
 */
import {
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

import conversationType from '../types/conversation';

export default {
  name: 'ConversationsQuery',
  type: new GraphQLList(conversationType),
  args: {
    isTemp: {
      type: GraphQLBoolean,
      defaultValue: null,
    },
  },
  resolve: (source, args, context) => new Promise((resolve, reject) => {
    const conversationsWhere = {};
    if (args.isTemp !== null) {
      conversationsWhere.isTemp = args.isTemp;
    }

    return context.app.database.User
      .findOne({
        where: {
          id: context.request.user.id,
        },
        include: [
          {
            model: context.app.database.Conversation,
            where: conversationsWhere,
            include: [
              {
                model: context.app.database.User,
              },
            ],
          },
        ],
      })
      .then(user => resolve(user.conversations))
      .catch(reject);
  }),
};
