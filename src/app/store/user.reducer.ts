import { createReducer, on } from '@ngrx/store';
import { UserDetail } from '../interfaces/interfaces';
import { loginUser, setExistingUsers } from './user.action';

export interface UserState {
  existingUsers: UserDetail[];
  currentUser: UserDetail | null;
}

export const initialState: UserState = {
  existingUsers: [],
  currentUser: null
};

export const userReducer = createReducer(
  initialState,
  on(loginUser, (state, { user }) => ({
    ...state,
    currentUser: user
  })),
  on(setExistingUsers, (state, { users }) => ({
    ...state,
    existingUsers: users
  }))
);
