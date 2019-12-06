// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import ExerciseList from './exerciseList/ExerciseList';
import type { ExercisesQueryResponse } from './__generated__/ExercisesQuery.graphql';
import AddExerciseForm from './createExercise/AddExerciseForm';

type Props = {||};

export const query = graphql`
  query ExercisesQuery {
    viewer {
      ...ExerciseList_exercises
    }
  }
`;

const renderQuery = (props: ExercisesQueryResponse) => {
  return (
    <>
      <AddExerciseForm />
      <ExerciseList exercises={props.viewer} />
    </>
  );
};

export default (function ExercisesQuery() {
  return <QueryRenderer variables={{}} query={query} render={renderQuery} />;
}: React.ComponentType<Props>);
