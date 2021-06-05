import React, { useState } from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Template from "./pages";

import PageContext from "./contexts/page";

const App = () => {
  const [page, setPage] = useState("ready");

  const onClick = () => {
    if (page === "ready") {
      setPage(0);
    } else if (page >= 0 && page < 11) {
      const nextPage = page + 1;
      setPage(nextPage);
    } else if (page === 11) {
      setPage("result");
    } else {
      setPage("ready");
    }
  };

  return (
    <PageContext.Provider value={{ status: page, action: onClick }}>
      <Reset />
      <StyledDiv className="App">
        <Template />
      </StyledDiv>
    </PageContext.Provider>
  );
};

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
