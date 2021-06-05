import React from "react";
import styled from "styled-components";

const Button = ({ description }) => {
  return <StyledButton>{description}</StyledButton>;
};

export default Button;

Button.defaultProps = {
  question: "...",
};

const StyledButton = styled.button`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border: none;
  border-radius: 1rem;
  font-size: 24px;
  font-family: DungGeunMo;
  background: #15aabf;
  color: white;

  &:hover {
    opacity: 95%;
    transform: scale(0.97);
  }
`;
