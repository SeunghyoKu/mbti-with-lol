import React, { useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as Facebook } from "components/Icons/facebook.svg";
import { ReactComponent as Kakaotalk } from "components/Icons/kakaotalk.svg";
import { ReactComponent as Twitter } from "components/Icons/twitter.svg";

require("dotenv").config();

const Social = ({ platform }) => {
  const theme = {
    kakaotalk: "#fee500",
    twitter: "#1da1f2",
    facebook: "#3b5998",
  };

  const logo = {
    kakaotalk: <Kakaotalk className="logo" id="kakao-share" />,
    twitter: <Twitter className="logo" fill={theme[platform]} />,
    facebook: <Facebook className="logo" fill={theme[platform]} />,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = {
    kakaotalk: () => {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_KAKAO_KEY);
        }
        kakao.Link.createDefaultButton({
          container: "#kakao-share",
          objectType: "feed",
          content: {
            title: "내가 몰랐던 인생 챔피언 찾기",
            description: "#MBTI #챔피언추천",
            imageUrl: "https://i.imgur.com/pvyED7e.png",
            link: {
              mobileWebUrl: "https://mbti-with-lol.netlify.app/",
              webUrl: "https://mbti-with-lol.netlify.app/",
            },
          },
          buttons: [
            {
              title: "인생 챔피언 찾으러 가기",
              link: {
                mobileWebUrl: "https://mbti-with-lol.netlify.app/",
                webUrl: "https://mbti-with-lol.netlify.app/",
              },
            },
          ],
        });
      }
    },
    twitter: () => {
      window.open(
        "https://www.twitter.com/intent/tweet?&url=https://mbti-with-lol.netlify.app/"
      );
    },
    facebook: () => {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?&u=https://mbti-with-lol.netlify.app/"
      );
    },
  };

  return (
    <StyledSocial>
      <A theme={theme[platform]} onClick={handleClick[platform]}>
        <Icon>{logo[platform]}</Icon>
      </A>
    </StyledSocial>
  );
};

export default Social;

const StyledSocial = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
    margin-bottom: 4px;
  }
`;

const A = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme};
    transition: 0.4s;
  }

  &:hover::before {
    height: 100%;
  }

  &:hover .logo {
    fill: white;
  }
`;

const Icon = styled.div`
  display: flex;
  width: 70%;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;
