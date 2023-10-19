import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const SharedButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 0.875rem;
  background-image: linear-gradient(to right, #22d3ee, #0d6efd);
  color: #ffffff;
  border-radius: 9999px;
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11),
    0px 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.15s ease;
  border: 0;
  cursor: pointer;

  :hover {
    box-shadow: 0px 10px 20px rgba(50, 50, 93, 0.1),
      0px 6px 6px rgba(0, 0, 0, 0.08);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(38, 139, 210, 0.5);
  }
`;

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <SharedButton type="button" {...props}>
      {label}
    </SharedButton>
  );
};
