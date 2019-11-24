// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { connectionFromArray, connectionArgs, type ConnectionArguments } from 'graphql-relay';
import { ExerciseRepository } from '@tbergq/trainingjournal-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import ExerciseConnection from '../../exercise/types/output/ExerciseConnection';

export default new GraphQLObjectType({
  name: 'TraningJournalViewer',
  isTypeOf: value => value === 'trainingjournal',
  fields: {
    id: GlobalID((_: mixed, { user }: GraphqlContextType) => user?.id ?? ''),
    username: {
      type: GraphQLString,
      resolve: (_: mixed, __: mixed, { user }: GraphqlContextType) => {
        return user?.username;
      },
    },

    exercises: {
      type: ExerciseConnection,
      args: connectionArgs,
      resolve: async (_: mixed, args: ConnectionArguments, { user }: GraphqlContextType) => {
        const userId = user?.id;
        if (userId == null) {
          return null;
        }

        const exercises = await ExerciseRepository.getExercises(userId);
        return connectionFromArray(exercises, args);
      },
    },
  },
});