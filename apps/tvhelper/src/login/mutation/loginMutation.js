// @flow

import { graphql, commitMutation, Environment } from '@tbergq/relay';

import type {
  loginMutationVariables,
  loginMutationResponse,
} from './__generated__/loginMutation.graphql';

const mutation = graphql`
  mutation loginMutation($username: String!, $password: String!) {
    tvHelperLogin(username: $username, password: $password) {
      success
      token
    }
  }
`;

export default function LoginMutation(
  variables: loginMutationVariables,
  onCompleted: (response: ?loginMutationResponse, errors: ?$ReadOnlyArray<Error>) => void,
) {
  const environment = Environment.getEnvironment();
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
  });
}