/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type ExerciseListItem_exercise$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseList_exercises$ref: FragmentReference;
declare export opaque type ExerciseList_exercises$fragmentType: ExerciseList_exercises$ref;
export type ExerciseList_exercises = {|
  +exercises: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ExerciseListItem_exercise$ref,
      |}
    |}>
  |},
  +$refType: ExerciseList_exercises$ref,
|};
export type ExerciseList_exercises$data = ExerciseList_exercises;
export type ExerciseList_exercises$key = {
  +$data?: ExerciseList_exercises$data,
  +$fragmentRefs: ExerciseList_exercises$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ExerciseList_exercises",
  "type": "TraningJournalViewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "exercises"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "exercises",
      "name": "__ExerciseList_exercises_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "ExerciseConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ExerciseEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Exercise",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "ExerciseListItem_exercise",
                  "args": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '21fef23dffeceb2bc41b4e1da0c0bfab';
export default node;