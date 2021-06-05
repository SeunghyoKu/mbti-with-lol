import React from "react";
import styled from "styled-components";

import Button from "components/Button";
import P from "components/PWithFont";
import Bar from "components/Bar";

const Template = (props) => {
  return (
    <StyledTemplate>
      <P size="40" description="내 롤 인생 챔피언 찾기"></P>
      <Bar />
      <P
        size="18"
        margin="20"
        description="내가 몰랐던 나의 인생 챔피언이 있다?!"
      ></P>
      <P size="25" margin="20" description="👇👇👇👇👇"></P>
      <Button description="테스트 시작하기" />
    </StyledTemplate>
  );
};

export default Template;

const StyledTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  background: white;
  border: 3px solid darkgray;
  border-radius: 1vh;
`;
