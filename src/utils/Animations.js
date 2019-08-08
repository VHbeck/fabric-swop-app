import { keyframes } from "styled-components";

export const Rotate = keyframes`
0% {
    transform: scale(1) rotateZ(0);
  }
  50% {
    transform: scale(2) rotateZ(180deg);
  }
  100% {
    transform: scale(1) rotateZ(360deg);
  }
`;

export const FadeIn = keyframes`
0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;
