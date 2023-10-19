import { AnyAction } from "redux";
import { UserActions } from "./userActions";

export interface UserState {
  userEmail: string | null;
  displayMessage: string | null;
  isLoading: boolean;
}

export const initialState: UserState = {
  userEmail: null,
  displayMessage: null,
  isLoading: false,
};

export function userReducer(
  state: UserState = initialState,
  action: AnyAction = { type: null, payload: null }
) {
  switch (action.type) {
    case UserActions.SET_DISPLAY_MESSAGE: {
      return {
        ...state,
        displayMessage: action.payload,
      };
    }
    case UserActions.LOAD_USER_START:
      return {
        ...state,
        userEmail: null,
        isLoading: true,
      };

    case UserActions.LOAD_USER_SUCCESS:
      return {
        ...state,
        userEmail: action.payload,
        isLoading: false,
      };

    case UserActions.LOGIN_USER_ERROR:
      return {
        ...state,
        userEmail: null,
        isLoading: false,
      };

    case UserActions.LOGOUT_USER_START:
      return {
        ...state,
        userEmail: null,
        isLoading: true,
      };

    case UserActions.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        userEmail: null,
        isLoading: false,
      };

    case UserActions.LOGOUT_USER_ERROR:
      return {
        ...state,
        userEmail: null,
        isLoading: false,
      };

    case UserActions.REGISTER_USER_START:
      return {
        ...state,
        userEmail: null,
        isLoading: true,
      };

    case UserActions.REGISTER_USER_SUCCESS:
      return {
        ...state,
        userEmail: null,
        isLoading: false,
      };

    case UserActions.REGISTER_USER_ERROR:
      return {
        ...state,
        userEmail: null,
        isLoading: false,
      };

    default:
      return state;
  }
}
