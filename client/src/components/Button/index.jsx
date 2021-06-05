import React, { useContext } from "react";
import styled from "styled-components";

import PageContext from "contexts/page";

const Button = ({ description }) => {
  const { action } = useContext(PageContext);
  return <StyledButton onClick={action}>{description}</StyledButton>;
};

export default Button;

Button.defaultProps = {
  question: "...",
};

const StyledButton = styled.button`
  display: flex;
  width: 70%;
  height: 50px;
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

  @media (max-width: 700px) {
    height: 40px;
    padding: 30px;
    font-size: 18px;
  }
`;
