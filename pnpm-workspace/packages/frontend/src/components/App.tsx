import React from "react";
import { EWrapper } from "./shared";
import { Router } from "./Router";
import { ModalWindowMessage } from "./ModalWindowMessage";

export const App = () => {
  return (
    <>
      <ModalWindowMessage />
      <EWrapper>
        <Router />
      </EWrapper>
    </>
  );
};
