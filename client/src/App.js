import React, { useState } from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Template from "./pages";

import PageContext from "./contexts/page";
import AnswerContext from "./contexts/answer";

const App = ({ mbti }) => {
  const [page, setPage] = useState("ready");
  const [answer, setAnswer] = useState("");

  const onClick = () => {
    if (page === "ready") {
      setPage(0);
      setAnswer("");
    } else if (page >= 0 && page < 11) {
      const nextPage = page + 1;
      setPage(nextPage);
    } else if (page === 11) {
      setPage("result");
      setAnswer("");
    } else {
      setPage("ready");
    }
  };

  const onAnswer = async (curr) => {
    const nextAnswer = answer + curr;
    setAnswer(nextAnswer);

    if (nextAnswer.length === 12) {
      mbti.setMbtiType(nextAnswer);
      const result = await mbti.getResult();
      await mbti.saveResult();
      setAnswer(result);
    }
  };

  return (
    <PageContext.Provider value={{ status: page, action: onClick }}>
      <Reset />
      <StyledDiv className="App">
        <AnswerContext.Provider value={{ result: answer, action: onAnswer }}>
          <Template />
        </AnswerContext.Provider>
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
