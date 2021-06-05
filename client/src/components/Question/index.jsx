import React, { useContext } from "react";
import styled from "styled-components";

import PageContext from "contexts/page";
import AnswerContext from "contexts/answer";

const Question = ({ description, answer }) => {
  const { action: onClick } = useContext(PageContext);
  const { action: onAnswer } = useContext(AnswerContext);
  const handleClick = (e) => {
    onClick();
    onAnswer(answer);
  };
  return <StyledButton onClick={handleClick}>{description}</StyledButton>;
};

export default Question;

const StyledButton = styled.button`
  display: flex;
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 5px;
  border: none;
  border-radius: 1rem;
  font-size: 21px;
  cursor: pointer;
  font-family: IBMPlexSansKR-Regular;
  background: #15aabf;
  color: white;

  &:hover {
    opacity: 95%;
    transform: scale(0.97);
  }

  @media (max-width: 700px) {
    height: 40px;
    padding: 30px;
    font-size: 14px;
  }
`;
