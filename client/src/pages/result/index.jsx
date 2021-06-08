import React, { useState, useContext } from "react";
import styled from "styled-components";

import Button from "components/Button";
import P from "components/PWithFont";
import PGothic from "components/PGothic";
import LCK from "components/LCK";
import Champion from "components/Champion";
import Loading from "components/Loading";
import Bar from "components/Bar";
import Social from "components/Social";

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

  const loadingTexts = [
    "누누 눈 굴리는 중",
    "아무무 친구 만드는 중",
    "스웨인 새 모이 주는 중",
    "룰루 깔깔 대는 중",
    "나서스 농사 짓는 중",
    "베인 앞구르기 연습 중",
  ];

  const randomId = Math.floor(Math.random() * loadingTexts.length);
  const [loading, setLoading] = useState(loadingTexts[randomId]);

  setTimeout(() => {
    if (!lck) setLoading("너무 오래 걸리면, 다시 시도해주시겠어요?");
  }, 5000);

  return (
    <>
      {comment === undefined && <Loading text={loading} />}
      {/* <img src={image} alt={mbti} /> */}
      <P size="24" description={comment}></P>
      <P size="40" description={mbti}></P>
      <PGothic margin="30" size="20" description={description} />
      {lck && <P size="18" margin="5" description="나와 같은 성격의 선수" />}
      <StyledDiv>
        {lck && lck.map((el) => <LCK key={el} player={el} />)}
      </StyledDiv>
      {recommendation && (
        <P size="18" margin="5" description="이런 챔피언은 어때요?" />
      )}
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
      {lck && <Bar />}
      {lck && <P size="18" margin="5" description="공유하기" />}
      {lck && <Social />}
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
