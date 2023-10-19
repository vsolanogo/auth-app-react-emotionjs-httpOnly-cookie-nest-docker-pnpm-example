import React from "react";
import styled from "@emotion/styled";

interface InputProps {
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const SharedInput = styled.input`
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: #ffffff;
  border: 1px solid #d2d6dc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  outline: none;
  font-weight: bold;
  :focus {
    border-color: #38b2ac;
    box-shadow: 0 0 0 3px rgba(56, 178, 172, 0.5);
  }

  ::placeholder {
    color: #a0aec0;
  }
`;

export const Input = ({
  value,
  type,
  onChange,
  placeholder,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <SharedInput
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};
