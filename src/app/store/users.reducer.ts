// store/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';

export interface UserState {
  existingEmails: string[];
}

export const initialState: UserState = {
  existingEmails: ['test@example.com', 'user@example.com'] // Mock data
};

const _userReducer = createReducer(
  initialState
  // Define your action handlers here (if any)
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
