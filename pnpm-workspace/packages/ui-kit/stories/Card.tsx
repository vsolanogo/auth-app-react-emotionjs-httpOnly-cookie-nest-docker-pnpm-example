import React from "react";
import styled from "@emotion/styled";

const ECard = styled.div`
  background-color: #f5f5f5;
  border-radius: 0.375rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
  font-weight: bold;
  border: 1px solid #d2d6dc;
`;

export const Card = ({ children }) => {
  return <ECard>{children}</ECard>;
};
