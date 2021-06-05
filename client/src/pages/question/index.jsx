import React, { useContext } from "react";

import QuestionDiv from "components/Question";
import P from "components/PWithFont";
import PGothic from "components/PGothic";

import PageContext from "contexts/page";
import questions from "service/questions";

const Question = (props) => {
  const { status } = useContext(PageContext);

  const { question, answer } = questions[status];

  return (
    <>
      <P size="30" description={"Q." + (status + 1)}></P>
      <PGothic size="30" margin="55" description={question}></PGothic>
      <QuestionDiv description={answer[0]} answer="0" />
      <QuestionDiv description={answer[1]} answer="1" />
    </>
  );
};

export default Question;
