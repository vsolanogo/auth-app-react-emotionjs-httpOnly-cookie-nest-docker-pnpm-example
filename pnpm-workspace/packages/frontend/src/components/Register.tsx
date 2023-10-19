import React, { useState } from "react";
import { useAppDispatch } from "../store/store";
import { validateEmail } from "../helpers/validateEmail";
import {
  setDisplayMessageAction,
  registerOperation,
} from "../redux/user/userActions";
import { Button, Card, Input } from "@pnpm-monorepo/ui-kit";
import { FormInputsLayout } from "./shared";

export const Register: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!validateEmail(email)) {
      dispatch(setDisplayMessageAction("Invalid email"));
      return;
    }

    if (password === "" && confirmPassword === "") {
      dispatch(setDisplayMessageAction("Please enter your password below"));
      return;
    }

    if (password !== confirmPassword) {
      dispatch(setDisplayMessageAction("The passwords don't match"));
      return;
    }

    dispatch(registerOperation({ email, password }));
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

        <Input
          type="password"
          placeholder="confirm password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
        />

        <Button onClick={handleRegister} label={"Register"} />
      </FormInputsLayout>
    </Card>
  );
};
