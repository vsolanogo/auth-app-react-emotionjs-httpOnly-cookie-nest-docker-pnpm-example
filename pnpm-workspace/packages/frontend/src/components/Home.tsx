import React from "react";
import { useUserEmail } from "../redux/selectors/selectorHooks";
import { useAppDispatch } from "../store/store";
import { loadAppOperation } from "../redux/user/userActions";
import { Heading2 } from "./shared";

export const Home: React.FC = (): JSX.Element => {
  const email = useUserEmail();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadAppOperation());
  }, []);

  return (
    <div>
      <Heading2>{email}</Heading2>
    </div>
  );
};
