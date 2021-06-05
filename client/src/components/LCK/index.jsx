import React from "react";
import styled from "styled-components";

const LCK = ({ player }) => {
  return <StyledDiv>{player}</StyledDiv>;
};

export default LCK;

const StyledDiv = styled.div`
  background: #e3fafc;
  border-radius: 2vw;
  padding: 10px;
  text-align: center;
  margin: 5px;
`;
