import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";

import {
  signOutSucces,
  signInSucces,
  signInFailed,
  signOutFailed,
  signUpFailed,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signOutSucces.match(action)) {
    return { ...state, currentUser: null };
  }
  if (signInSucces.match(action)) {
    return { ...state, currentUser: action.payload, isLoading: false };
  }
  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};
