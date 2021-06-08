import React from "react";
import styled from "styled-components";

import Link from "./Link";
import Sns from "./Sns";

const Social = (props) => {
  const sns = ["facebook", "kakaotalk", "twitter"];
  return (
    <>
      <StyledSocial>
        {sns.map((el) => (
          <Sns platform={el} key={el} />
        ))}
      </StyledSocial>
      <Link />
    </>
  );
};

export default Social;

const StyledSocial = styled.div`
  display: flex;
`;
