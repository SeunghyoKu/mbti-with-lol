import React from "react";
import styled from "styled-components";

const PWithFont = ({ margin, size, description }) => {
  return (
    <P margin={margin} size={size}>
      {description}
    </P>
  );
};

export default PWithFont;

const P = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: ${({ margin }) => margin + "px"};
  font-family: DungGeunMo;
  font-size: ${({ size }) => size + "px"};
  text-align: center;

  @media (max-width: 800px) {
    font-size: ${({ size }) => size / 6 + "vw"};
  }
`;
