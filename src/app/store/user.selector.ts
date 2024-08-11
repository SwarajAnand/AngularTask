// store/user.selectors.ts
import { createSelector } from '@ngrx/store';
import { AppState } from './globalUsers.state';


export const selectUserState = (state: AppState) => state.user;

export const selectExistingEmails = createSelector(
  selectUserState,
  (userState) => userState.existingEmails
);
