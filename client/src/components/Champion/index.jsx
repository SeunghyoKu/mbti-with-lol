import React from "react";
import styled from "styled-components";

const Champion = ({ source }) => {
  return <StyledChampion src={source}></StyledChampion>;
};

export default Champion;

const StyledChampion = styled.img`
  margin: 10px;
  width: 20%;
  border: 4px solid #0c8599;
  border-radius: 50%;
`;
