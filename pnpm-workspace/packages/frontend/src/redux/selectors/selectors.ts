export const selectReduxMainState = (state) => state ?? null;
export const selectUserState = (state) => state?.user ?? null;

export const selectUserEmail = (state) =>
  selectUserState(state)?.userEmail ?? null;

export const selectDisplayMessage = (state) => {
  return selectUserState(state)?.displayMessage ?? null;
};
