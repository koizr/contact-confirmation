import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

// https://github.com/feathericons/feather/issues/695#issuecomment-514138552

const LoadingIcon = styled.svg.attrs({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10" />,
})`
  width: 1em;
  height: 1em;
  animation: ${rotate} 0.8s linear infinite;
  color: #00ceff;
`;

export default LoadingIcon;
