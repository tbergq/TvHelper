// @flow

import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import Episode from '../types/output/Episode';

type Args = {|
  +id: string,
|};

export default {
  name: 'Episode',
  description: 'Load episode by id',
  type: Episode,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    const id = fromGlobalId(args.id);
    const episode = await dataLoader.tvhelper.episode.load(id);
    return episode;
  },
};
