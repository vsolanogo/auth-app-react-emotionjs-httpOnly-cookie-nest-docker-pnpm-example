import React from "react";
import styled from "@emotion/styled";
import { Link } from "wouter";
import { useUserEmail } from "../../redux/selectors/selectorHooks";
import { logoutOperation } from "../../redux/user/userActions";
import { useAppDispatch } from "../../store/store";
import { Button } from "@pnpm-monorepo/ui-kit";

const EHeader = styled.header`
  align-items: center;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 0.5em;
  justify-content: center;
  top: 0;
  white-space: nowrap;
  width: 100%;
  z-index: 777;
  box-shadow: 0 0.36em 1.18em 0 rgba(0, 0, 0, 0.08);
  height: 4em;
  background: #fff;
`;

export const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const email = useUserEmail();

  const handleRemoveCookie = () => {
    dispatch(logoutOperation());
  };

  return (
    <EHeader>
      {!email && (
        <>
          <Link href={`/login`}>
            <Button label={"Login"} />
          </Link>

          <Link href={`/register`}>
            <Button label={"Register"} />
          </Link>
        </>
      )}

      {email && (
        <>
          <Button onClick={handleRemoveCookie} label={"Sign out"} />
        </>
      )}
    </EHeader>
  );
};
