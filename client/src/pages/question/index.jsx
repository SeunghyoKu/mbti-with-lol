import React, { useContext } from "react";

import Button from "components/Button";
import P from "components/PWithFont";

import PageContext from "contexts/page";

const Question = (props) => {
  const { status } = useContext(PageContext);

  return (
    <>
      <P size="40" description={status}></P>
      <Button description="다음" />
    </>
  );
};

export default Question;
