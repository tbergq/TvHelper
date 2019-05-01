/**
 * @flow
 * @relayHash d577134f5335f5a25979ff6b0ce49cee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TvShowPage_tvShow$ref = any;
export type TvShowQueryVariables = {|
  id: string
|};
export type TvShowQueryResponse = {|
  +tvShowDetail: ?{|
    +$fragmentRefs: TvShowPage_tvShow$ref
  |}
|};
export type TvShowQuery = {|
  variables: TvShowQueryVariables,
  response: TvShowQueryResponse,
|};
*/


/*
query TvShowQuery(
  $id: ID!
) {
  tvShowDetail(id: $id) {
    ...TvShowPage_tvShow
    id
  }
}

fragment TvShowPage_tvShow on TvShow {
  name
  summary(stripTags: false)
  ...TvShowImage_tvShow
  ...Episodes_episodes
}

fragment TvShowImage_tvShow on TvShow {
  id
  image {
    original
    id
  }
  isFavorite
}

fragment Episodes_episodes on TvShow {
  episodes {
    id
    ...Episode_episode
  }
}

fragment Episode_episode on Episode {
  id
  name
  seasonAndNumber
  airdate
  summary
  watched
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TvShowQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TvShowPage_tvShow",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TvShowQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "summary",
            "args": [
              {
                "kind": "Literal",
                "name": "stripTags",
                "value": false
              }
            ],
            "storageKey": "summary(stripTags:false)"
          },
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "TvHelperImage",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "original",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isFavorite",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "episodes",
            "storageKey": null,
            "args": null,
            "concreteType": "Episode",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "seasonAndNumber",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "airdate",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "summary",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "watched",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TvShowQuery",
    "id": null,
    "text": "query TvShowQuery(\n  $id: ID!\n) {\n  tvShowDetail(id: $id) {\n    ...TvShowPage_tvShow\n    id\n  }\n}\n\nfragment TvShowPage_tvShow on TvShow {\n  name\n  summary(stripTags: false)\n  ...TvShowImage_tvShow\n  ...Episodes_episodes\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  image {\n    original\n    id\n  }\n  isFavorite\n}\n\nfragment Episodes_episodes on TvShow {\n  episodes {\n    id\n    ...Episode_episode\n  }\n}\n\nfragment Episode_episode on Episode {\n  id\n  name\n  seasonAndNumber\n  airdate\n  summary\n  watched\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '604e2e93c43e675377ac6f78630ecaac';
module.exports = node;
