import { createAction, props } from '@ngrx/store';
import { UserDetail } from '../interfaces/interfaces';

// Action to add a user detail
export const addUserDetail = createAction(
  '[User Details] Add User Detail',
  props<{ userDetail: UserDetail }>()
);

// Action to remove a user detail by index
export const removeUserDetail = createAction(
  '[User Details] Remove User Detail',
  props<{ index: number }>()
);


