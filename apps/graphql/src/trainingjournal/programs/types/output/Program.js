// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { GraphQLDate } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'Program',
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLDate,
    },
  },
});