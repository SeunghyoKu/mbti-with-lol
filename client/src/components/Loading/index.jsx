import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = (props) => {
  return (
    <div>
      <PacmanTop />
      <PacmanBottom />
      <Heart />
    </div>
  );
};

export default Loading;

const spin1 = keyframes`
    0%  {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-35deg);
    }
`;

const spin2 = keyframes`
    0%  {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(35deg);
    }
`;

const PacmanTop = styled.div`
  position: relative;
  background-color: #3bc9db;
  height: 70px;
  width: 140px;
  border-radius: 70px 70px 0 0;
  z-index: 10;
  animation: ${spin1} 0.7s infinite;
`;

const PacmanBottom = styled.div`
  position: relative;
  background-color: #3bc9db;
  height: 70px;
  width: 140px;
  border-radius: 0 0 70px 70px;
  z-index: 10;
  animation: ${spin2} 0.7s infinite;
`;

const Eat = keyframes`
    from {
        left: 300px;
    }
    to {
        left: 30px;
    }
`;

const Heart = styled.div`
  position: relative;
  top: -70px;
  left: 50px;
  width: 30px;
  height: 30px;
  background: #ffe066;
  transform: rotate(45deg);
  animation: ${Eat} 0.5s infinite ease-in-out;
  z-index: 2;

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: -50%;
    border-radius: 50%;
    background: #ffe066;
  }
  &::after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    top: -50%;
    border-radius: 50%;
    background: #ffe066;
  }
`;
