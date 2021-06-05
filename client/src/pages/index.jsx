import React, { useContext } from "react";
import styled from "styled-components";

import PageContext from "contexts/page";

import Start from "pages/start";
import Question from "pages/question";
import Result from "pages/result";

const Template = (props) => {
  const { status } = useContext(PageContext);

  if (status === "ready") {
    return (
      <StyledTemplate>
        <Start />
      </StyledTemplate>
    );
  } else if (status >= 0 && status <= 11) {
    return (
      <StyledTemplate>
        <Question />
      </StyledTemplate>
    );
  } else if (status === "result") {
    return (
      <StyledTemplate>
        <Result />
      </StyledTemplate>
    );
  }
  return <StyledTemplate>{status}</StyledTemplate>;
};

export default Template;

const StyledTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 800px;
  background: white;
  border: 3px solid darkgray;
  border-radius: 1vh;

  @media (max-width: 700px) {
    width: 80%;
    height: 80%;
  }
`;
