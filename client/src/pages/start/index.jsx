import React from "react";
import styled from "styled-components";

import Button from "components/Button";
import P from "components/PWithFont";
import Bar from "components/Bar";

const Template = (props) => {
  return (
    <>
      <P size="40" description="롤 인생 챔피언 찾기"></P>
      <Bar />
      <StyledP>내가 몰랐던 나의 인생 챔피언이 있다?!</StyledP>
      <P size="25" margin="20" description="👇👇👇👇👇"></P>
      <Button description="테스트 시작하기" />
    </>
  );
};

export default Template;

const StyledP = styled.p`
  font-family: IBMPlexSansKR-Regular;
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 3.5vw;
  }
`;
