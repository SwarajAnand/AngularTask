import { createAction, props } from '@ngrx/store';
import { UserDetail } from '../interfaces/interfaces';

export const loginUser = createAction(
  '[User] Login User',
  props<{ user: UserDetail }>()
);

export const setExistingUsers = createAction(
  '[User] Set Existing Users',
  props<{ users: UserDetail[] }>()
);

