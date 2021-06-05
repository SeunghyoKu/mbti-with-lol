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
  margin-bottom: ${({ margin }) => margin + "px"};
  font-family: DungGeunMo;
  font-size: ${({ size }) => size + "px"};
`;
