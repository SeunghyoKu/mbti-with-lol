import React from "react";
import styled from "styled-components";

import P from "components/PGothic";

const LCK = ({ player }) => {
  return (
    <StyledDiv>
      <P description={player} size="14"></P>
    </StyledDiv>
  );
};

export default LCK;

const StyledDiv = styled.div`
  background: #e3fafc;
  border-radius: 2vw;
  padding: 10px;
  text-align: center;
  margin: 5px;

  @media (max-width: 700px) {
    padding: 10px 0px 10px 0px;
    margin: 2px;
  }
`;
