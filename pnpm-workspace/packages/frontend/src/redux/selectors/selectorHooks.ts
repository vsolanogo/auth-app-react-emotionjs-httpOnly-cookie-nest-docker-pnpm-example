import { createSelector } from "reselect";
import { useAppSelector } from "../../store/store";
import {
  selectReduxMainState,
  selectUserState,
  selectUserEmail,
  selectDisplayMessage,
} from "./selectors";

export const useReduxMainState = (): any =>
  useAppSelector(createSelector(selectReduxMainState, (i) => i));

export const useUserState = (): any =>
  useAppSelector(createSelector(selectUserState, (i) => i));

export const useUserEmail = (): string =>
  useAppSelector(createSelector(selectUserEmail, (i) => i));

export const useDisplayMessage = (): string =>
  useAppSelector(createSelector(selectDisplayMessage, (i) => i));
