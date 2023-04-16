import { createAction } from '@reduxjs/toolkit';
import { LocationApp } from '../consts';

export const redirect = createAction<LocationApp>(
  'app/redirect'
);
