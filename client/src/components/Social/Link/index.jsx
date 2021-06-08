import React, { useState, useRef } from "react";
import styled from "styled-components";
import PGothic from "components/Description";

const Link = (props) => {
  const textInput = useRef();
  const [clicked, setClicked] = useState(false);

  const copy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
  };

  const onClick = () => {
    setClicked(true);
    copy();
  };

  return (
    <StyledDiv>
      <input
        type="text"
        value="https://mbti-with-lol.netlify.app/"
        ref={textInput}
        readOnly
      ></input>
      <StyledButton onClick={onClick}>링크 복사</StyledButton>
      {clicked && <PGothic description="복사됨!" size="14"></PGothic>}
    </StyledDiv>
  );
};

export default Link;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  padding: 3px 10px;
  margin-right: 2px;
  background: #22b8cf;
  color: white;
  border: none;
  border-radius: 4px;
  &:active {
    background: #0b7285;
  }
`;
