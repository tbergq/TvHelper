// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Link from '../Link';

it('renders', () => {
  expect(create(<Link href="/test">test</Link>)).toMatchInlineSnapshot(`
    <a
      href="/test"
      onClick={[Function]}
    >
      test
    </a>
  `);
});
