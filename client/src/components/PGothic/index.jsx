import React from "react";
import styled from "styled-components";

const PGothic = ({ margin, size, description, answer }) => {
  return (
    <>
      {description &&
        description.split("\n").map((line) => {
          return (
            <P size={size} key={line}>
              {line}
              <br />
            </P>
          );
        })}
    </>
  );
};

export default PGothic;

const P = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  font-family: IBMPlexSansKR-Regular;
  font-size: ${({ size }) => size + "px"};
  text-align: center;
  line-height: 140%;

  @media (max-width: 700px) {
    font-size: ${({ size }) => size / 5.5 + "vw"};
  }
`;
