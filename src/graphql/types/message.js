/**
  * @file Represents union of message content types
  */
import { GraphQLUnionType } from 'graphql';

import textMessage from './text_message';

const message = new GraphQLUnionType({
  name: 'MessageType',
  types: [
    textMessage,
  ],
  // TODO add useful resolveType function
  resolveType: (value) => textMessage,
});

export default message;
