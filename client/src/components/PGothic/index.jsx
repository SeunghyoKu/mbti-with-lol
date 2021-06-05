import React from "react";
import styled from "styled-components";

const PGothic = ({ margin, size, description }) => {
  return (
    <P margin={margin} size={size}>
      {description}
    </P>
  );
};

export default PGothic;

const P = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  margin: 55px;
  font-family: IBMPlexSansKR-Regular;
  font-size: ${({ size }) => size + "px"};
  text-align: center;

  @media (max-width: 700px) {
    font-size: 5vw;
  }
`;
