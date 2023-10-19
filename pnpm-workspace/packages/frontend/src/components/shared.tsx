import styled from "@emotion/styled";

export const SharedDivider = styled.div`
  width: 100%;
  height: 5em;

  @media (max-width: 1300px) {
    height: 3.75em;
  }
  @media (max-width: 900px) {
    height: 2.5em;
  }

  &[data-count="2"] {
    height: 10em;
    @media (max-width: 1300px) {
      height: 7.5em;
    }
    @media (max-width: 900px) {
      height: 5em;
    }
  }

  &[data-count="3"] {
    height: 15em;
    @media (max-width: 1300px) {
      height: 11.25em;
    }
    @media (max-width: 900px) {
      height: 7.5em;
    }
  }

  &[data-count="4"] {
    height: 20em;
    @media (max-width: 1300px) {
      height: 15em;
    }
    @media (max-width: 900px) {
      height: 10em;
    }
  }

  &[data-count="5"] {
    height: 25em;
    @media (max-width: 1300px) {
      height: 18.75em;
    }
    @media (max-width: 900px) {
      height: 12.5em;
    }
  }
`;

export const EWrapper = styled.div`
  max-width: 100em;
  display: grid;
  grid-row-gap: 0.5em;
  margin: 0 auto;
`;

export const SharedModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  z-index: 1200;
  max-width: 100%;
  left: 0;
  top: 0;
`;

export const Heading2 = styled.h2`
  background: linear-gradient(to right, #21ceee, #0047ab);
  color: transparent;
  background-clip: text;
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: Arial, sans-serif;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: #3b82f6;
  color: #ffffff;

  :hover {
    background-color: #1d4ed8;
  }
`;

export const FormInputsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
`;
