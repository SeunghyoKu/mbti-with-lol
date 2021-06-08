import React from "react";
import styled from "styled-components";

const Bar = () => {
  return <StyledBar />;
};

export default Bar;

const StyledBar = styled.div`
  width: 50%;
  margin: 20px;
  height: 1px;
  background: darkgray;
  z-index: 1;

  @media (max-width: 700px) {
    margin: 10px;
  }
`;
