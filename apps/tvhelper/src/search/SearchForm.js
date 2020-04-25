// @flow strict-local

import * as React from 'react';
import { InputField, Button } from '@tbergq/components';
import styled from 'styled-components';
import { Form, useFormikContext } from 'formik';

type Props = {};

const ButtonWrapper = styled('div')({
  marginTop: '8px',
  justifyContent: 'flex-end',
  display: 'flex',
});

export default (function SearchForm() {
  const { isSubmitting } = useFormikContext();
  return (
    <Form action="/" method="get">
      <InputField name="query" dataTest="SearchFormInput" label="Search" />
      <ButtonWrapper>
        <Button loading={isSubmitting} dataTest="SearchFormButton" type="submit">
          Search
        </Button>
      </ButtonWrapper>
    </Form>
  );
}: React.ComponentType<Props>);
