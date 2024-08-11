import { createSelector } from '@ngrx/store';
import { AppState } from './globalUsers.state';
import { UserState } from './user.reducer';

export const selectUserState = (state: AppState) => state.user;

export const selectExistingUsers = createSelector(
  selectUserState,
  (userState: UserState) => userState.existingUsers
);

export const selectCurrentUser = createSelector(
  selectUserState,
  (userState: UserState) => userState.currentUser
);