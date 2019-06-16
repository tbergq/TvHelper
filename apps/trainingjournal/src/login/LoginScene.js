// @flow

import * as React from 'react';
import { LoginForm, Toast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/relay';
import Router from 'next/router';

import loginMutation from './mutation/trainingJournalLogin';
import type { trainingJournalLoginMutationResponse } from './mutation/__generated__/trainingJournalLoginMutation.graphql';

export default function LoginScene() {
  const [isLoading, setIsLoading] = React.useState(false);
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);

  const onSubmit = React.useCallback((username, password) => {
    setIsLoading(true);
    loginMutation(
      { username, password },
      (res: ?trainingJournalLoginMutationResponse) => {
        const success = res?.trainingJournalLogin?.success;
        const token = res?.trainingJournalLogin?.token;
        if (success && token) {
          localStorage.setItem(TOKEN_KEY, token);
          Router.push('/home');
        } else if (toastRef.current != null) {
          toastRef.current.show('Wrong username or password');
        }
        setIsLoading(false);
      },
    );
  }, []);

  return (
    <>
      <LoginForm onSubmit={onSubmit} loading={isLoading} />
      <Toast />
    </>
  );
}
