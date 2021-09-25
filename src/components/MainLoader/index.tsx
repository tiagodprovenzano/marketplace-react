import React from "react";
import styled, { css } from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../assets/loader.json";
const MainLoaderWrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: white;
  `}
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function MainLoader() {
  return (
    <MainLoaderWrapper>
      <Lottie options={defaultOptions} height={400} width={400} />
    </MainLoaderWrapper>
  );
}
