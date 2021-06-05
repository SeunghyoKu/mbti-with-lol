import React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";

import Template from "./pages/template";

function App() {
  return (
    <>
      <Reset />
      <StyledDiv className="App">
        <Template />
      </StyledDiv>
    </>
  );
}

export default App;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("background-source.jpg");
  background-size: cover;
  background-attachment: fixed;
`;
