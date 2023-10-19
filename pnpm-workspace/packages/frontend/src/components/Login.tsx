import React, { useState } from "react";
import {
  setDisplayMessageAction,
  loginOperation,
} from "../redux/user/userActions";
import { useAppDispatch } from "../store/store";
import { validateEmail } from "../helpers/validateEmail";
import { Button, Card, Input } from "@pnpm-monorepo/ui-kit";
import { FormInputsLayout } from "./shared";

export const Login: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!validateEmail(email)) {
      dispatch(setDisplayMessageAction("Invalid email"));
      return;
    }

    dispatch(loginOperation({ email, password }));
  };

  return (
    <Card>
      <FormInputsLayout>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <Button onClick={handleLogin} label={"Login"} />
      </FormInputsLayout>
    </Card>
  );
};
