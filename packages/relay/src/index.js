// @flow

import {
  type RelayProp as _RelayProp,
  type RefetchRelayProp as _RefetchRelayProp,
  type PaginationRelayProp as _PaginationRelayProp,
  type Environment as _RelayEnvironmentType,
  type DeclarativeMutationConfig,
  type RecordMap as _RecordMap,
  type GraphQLTaggedNode as _GraphQLTaggedNode,
} from '@adeira/relay';

export { default as QueryRenderer } from './QueryRenderer';
export { default as Environment } from './Environment';
export {
  graphql,
  createFragmentContainer,
  commitMutation,
  createRefetchContainer,
  createPaginationContainer,
  createEnvironment,
  fetchQuery,
  RelayEnvironmentProvider,
  useRelayEnvironment,
  useMutation,
} from '@adeira/relay';

export type RelayProp = _RelayProp;
export type RefetchRelayProp = _RefetchRelayProp;
export type PaginationRelayProp = _PaginationRelayProp;
export type RelayEnvironmentType = _RelayEnvironmentType;
export type MutationConfig = DeclarativeMutationConfig;
export type RecordMap = _RecordMap;
export type GraphQLTaggedNode = _GraphQLTaggedNode;

export type { FragmentContainerType, RefetchContainerType, PaginationContainerType } from './types';