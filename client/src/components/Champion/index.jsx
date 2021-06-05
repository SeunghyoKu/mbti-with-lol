import React from "react";
import styled from "styled-components";

import P from "components/PGothic";

const Champion = ({ source, name }) => {
  return (
    <StyledDiv>
      <StyledChampion src={source}></StyledChampion>
      <P description={name} margin="5" size="14"></P>
    </StyledDiv>
  );
};

export default Champion;

const StyledDiv = styled.div`
  margin: 10px;
  width: 20%;
`;

const StyledChampion = styled.img`
  width: 100%;
  border: 4px solid #0c8599;
  border-radius: 50%;
`;
