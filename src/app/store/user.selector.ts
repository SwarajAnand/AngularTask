import { createSelector } from '@ngrx/store';
import { AppState } from './globalUsers.state';
import { UserState } from './user.reducer';

// Select the user state from the AppState
export const selectUserState = (state: AppState) => state.user;

// Selector to get the list of existing users
export const selectExistingUsers = createSelector(
  selectUserState,
  (userState: UserState) => userState.existingUsers
);

export const selectCurrentUser = createSelector(
  selectUserState,
  (userState: UserState) => userState.currentUser
);