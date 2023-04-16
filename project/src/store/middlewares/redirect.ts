import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reduser';

type Reduser = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reduser> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'app/redirect') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
