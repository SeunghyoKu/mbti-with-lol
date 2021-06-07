import React, { useContext } from "react";
import styled from "styled-components";

import Button from "components/Button";
import P from "components/PWithFont";
import PGothic from "components/PGothic";
import LCK from "components/LCK";
import Champion from "components/Champion";
import Loading from "components/Loading";

import AnswerContext from "contexts/answer";

const Result = (props) => {
  const { result } = useContext(AnswerContext);
  const {
    comment,
    description,
    friend,
    // image,
    lck,
    mbti,
    recommendation,
  } = result;

  return (
    <>
      {comment === undefined && <Loading />}
      {/* <img src={image} alt={mbti} /> */}
      <P size="24" description={comment}></P>
      <P size="40" description={mbti}></P>
      <PGothic margin="30" size="20" description={description} />
      {lck && <P size="18" margin="5" description="나와 같은 성격의 선수" />}
      <StyledDiv>
        {lck && lck.map((el) => <LCK key={el} player={el} />)}
      </StyledDiv>
      {recommendation && <P size="18" margin="5" description="추천 챔피언" />}
      <StyledDiv>
        {recommendation &&
          recommendation.map(({ name, image }) => (
            <Champion key={name} source={image} name={name} />
          ))}
      </StyledDiv>
      {lck && <P size="18" margin="5" description="같이 하면 좋을 친구" />}
      <StyledDiv>
        {friend && friend.map((el) => <LCK key={el.name} player={el.name} />)}
      </StyledDiv>
      <Button description="처음으로" />
    </>
  );
};

export default Result;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 10px auto;
  flex-direction: row;
`;
