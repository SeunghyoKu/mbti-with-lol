import React, { useContext } from "react";

import Button from "components/Button";
import P from "components/PWithFont";

import PageContext from "contexts/page";

const Result = (props) => {
  const { status } = useContext(PageContext);

  return (
    <>
      <P size="40" description={status}></P>
      <Button description="처음으로" />
    </>
  );
};

export default Result;
